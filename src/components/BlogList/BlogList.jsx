import { gql, useQuery } from "@apollo/client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  FaHeart,
  FaRegBookmark,
  FaRegCommentAlt,
  FaRegHeart,
} from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import "./BlogList.scss";
import Tooltip from "../../shared/Tooltip/Tooltip";

const GET_BLOGS = gql`
  query {
    getBlogs {
      id
      title
      content
      createdAt
      reference
      imageUrl
    }
  }
`;

const BlogListsComponent = () => {
  const [list, setLists] = useState([]);
  const { loading, error, data } = useQuery(GET_BLOGS);

  useEffect(() => {
    if (data) {
      const blogs = data.getBlogs.map((blog) => {
        return {
          ...blog,
          isLiked: false,
          createdAt: moment(blog.createdAt).format("lll"),
        };
      });

      setLists(blogs);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleReactionClick = (id) => {
    setLists((prevList) => {
      const updatedList = prevList.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item
      );
      console.log("list", updatedList);
      return updatedList;
    });
  };

  return (
    <div className="blog-list-container">
      {list?.length > 0 &&
        list.map((item) => (
          <div className="blog-item" key={item.id}>
            <div>
              <div className="blog-item-authors">
                <Tooltip text="Dev" position="bottom">
                  <div className="blog-item-authors__avatar">
                    <img
                      className="blog-item-authors__image"
                      src={item?.imageUrl}
                      alt="img"
                    />
                  </div>
                </Tooltip>
                <div className="blog-item-authors__name">
                  <div className="blog-item-authors__title">
                    <span>Dev</span>
                  </div>
                  <div className="blog-item-authors__positions">
                    <small>Software Engineer</small>
                  </div>
                </div>
              </div>
              <div className="blog-item__title">
                <span className="blog-item__txt">{item?.title}</span>
              </div>
            </div>

            <div>
              <div className="blog-item__timestamp">
                Published • {item?.createdAt}
              </div>
              <div className="blog-item__image">
                <img src={item?.imageUrl} alt="img" />
              </div>
              <div className="blog-item-actions">
                <div className="blog-item-actions__reactions">
                  <div
                    className="blog-item-icon"
                    onClick={() => handleReactionClick(item?.id)}
                  >
                    <Tooltip
                      text={item?.isLiked ? "Liked" : "Like"}
                      position="top"
                    >
                      {item?.isLiked ? <FaHeart /> : <FaRegHeart />}
                    </Tooltip>
                  </div>
                </div>
                <div className="blog-item-actions__comments">
                  <Tooltip text="Comments" position="top">
                    <FaRegCommentAlt className="blog-item-icon" />
                  </Tooltip>
                </div>
                <div className="blog-item-actions__bookmark">
                  <Tooltip text="Bookmark" position="top">
                    <FaRegBookmark className="blog-item-icon" />
                  </Tooltip>
                </div>
                <div className="blog-item-item-actions__copy-links">
                  <Tooltip text="Copy link" position="top">
                    <FaLink className="blog-item-icon" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogListsComponent;
