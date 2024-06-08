import React from "react";
import { useSelector } from "react-redux";
import { selectAllUser } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const user = useSelector(selectAllUser);
  const author = user.find((user) => user.id === userId);
  return <span>by {author ? author.name : "Unknown Author"}</span>;
};

export default PostAuthor;
