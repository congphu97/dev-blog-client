import React, { useState } from "react";
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
import moment from "moment";

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
  const [lists, setLists] = useState([
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timestamp: "Nov 17",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDvG74hXU-tEysrQqKtQX5TgxEDdxX-jYg&s",
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      comments: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timestamp: "Nov 18",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDvG74hXU-tEysrQqKtQX5TgxEDdxX-jYg&s",
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      comments: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timestamp: "Nov 19",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDvG74hXU-tEysrQqKtQX5TgxEDdxX-jYg&s",
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      comments: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timestamp: "Nov 20",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDvG74hXU-tEysrQqKtQX5TgxEDdxX-jYg&s",
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      comments: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timestamp: "Nov 21",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDvG74hXU-tEysrQqKtQX5TgxEDdxX-jYg&s",
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      comments: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timestamp: "Nov 22",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDvG74hXU-tEysrQqKtQX5TgxEDdxX-jYg&s",
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      comments: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 7,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timestamp: "Nov 23",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDvG74hXU-tEysrQqKtQX5TgxEDdxX-jYg&s",
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      comments: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 8,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timestamp: "Nov 24",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDvG74hXU-tEysrQqKtQX5TgxEDdxX-jYg&s",
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      comments: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 9,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timestamp: "Nov 25",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDvG74hXU-tEysrQqKtQX5TgxEDdxX-jYg&s",
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      comments: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 10,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timestamp: "Nov 26",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDvG74hXU-tEysrQqKtQX5TgxEDdxX-jYg&s",
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      comments: 0,
      isLiked: false,
      isDisliked: false,
    },
  ]);

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

  const { loading, error, data } = useQuery(GET_BLOGS); // Hook to fetch data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log({ data });

  return (
    <div className="blog-list-container">
      {data?.getBlogs?.length > 0 &&
        data?.getBlogs.map((item) => (
          <div className="blog-list-item" key={item.id}>
            <div className="blog-list-item-title">
              <span className="blog-list-item-txt">{item?.title}</span>
            </div>
            <div className="blog-list-item-timestamp">
              {moment(item?.createdAt).fromNow()}
            </div>
            <div className="blog-list-item-image">
              <img src={item?.imageUrl} alt="img" />
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
