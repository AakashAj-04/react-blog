import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  const posts = useSelector(selectAllPost);
  const orderedPost = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderPost = orderedPost.map((item) => (
    <article key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={item.userId} />
        <TimeAgo timeStamp={item.date} />
        <ReactionButtons item={item} />
      </p>
    </article>
  ));
  return (
    <div>
      <h2>Posts</h2>
      {renderPost}
    </div>
  );
};

export default PostList;
