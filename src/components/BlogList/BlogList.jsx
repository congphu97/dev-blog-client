import React, { useState, useEffect } from "react";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";

import { useQuery, gql } from "@apollo/client";
import { FaLink } from "react-icons/fa6";
import { LiaComment } from "react-icons/lia";
import "./BlogList.scss";

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
      setLists(data.getBlogs);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleLikeClick = (id) => {
    setLists((prevLists) =>
      prevLists.map((item) =>
        item.id === id
          ? {
              ...item,
              isLiked: !item.isLiked,
              reactions: {
                ...item.reactions,
                likes: item.isLiked
                  ? item.reactions.likes - 1
                  : item.reactions.likes + 1,
              },
            }
          : item
      )
    );
  };

  const handleDisLikeClick = (id) => {
    setLists((prevLists) =>
      prevLists.map((item) =>
        item.id === id
          ? {
              ...item,
              isDisLiked: !item.isDisLiked,
              reactions: {
                ...item.reactions,
                dislikes: item.isDisLiked
                  ? item.reactions.dislikes - 1
                  : item.reactions.dislikes + 1,
              },
            }
          : item
      )
    );
  };

  return (
    <div className="blog-list-container">
      {list?.length > 0 &&
        list.map((item) => (
          <div className="blog-list-item" key={item.id}>
            <div className="blog-list-item-title">
              <span className="blog-list-item-txt">{item?.title}</span>
            </div>
            <div className="blog-list-item-timestamp">{item?.timestamp}</div>
            <div className="blog-list-item-image">
              <img src={item?.image} alt="img" />
            </div>
            <div className="blog-list-item-actions">
              <div className="blog-list-item-reactions">
                <span
                  className="blog-list-item-icon"
                  onClick={() => handleLikeClick(item?.id)}
                >
                  {item?.isLiked ? <AiFillLike /> : <AiOutlineLike />}{" "}
                  {item?.reactions?.likes}
                </span>
                <span
                  className="blog-list-item-icon"
                  onClick={() => handleDisLikeClick(item?.id)}
                >
                  {item?.isDisLiked ? <AiFillDislike /> : <AiOutlineDislike />}{" "}
                  {item?.reactions?.dislikes}
                </span>
              </div>
              <div className="blog-list-item-comments">
                <LiaComment className="blog-list-item-icon" /> {item?.comments}
              </div>

              <div className="blog-list-item-copy-links">
                <FaLink className="blog-list-item-icon" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogListsComponent;
