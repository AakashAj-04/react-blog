import React, { useState } from "react";
import { postAdded } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUser } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUser);

  const titleChanged = (e) => setTitle(e.target.value);
  const contentChanged = (e) => setContent(e.target.value);
  const authorChanged = (e) => setUserId(e.target.value);
  const savePostClick = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };
  const userOptions = users.map((user) => (
    <option id={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  return (
    <div>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={titleChanged}
        />

        <label htmlFor="Author">Author:</label>
        <select
          name="postAuthor"
          id="Author"
          value={userId}
          onChange={authorChanged}
        >
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="postTitle">Post Title:</label>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={contentChanged}
        />
        <button type="button" onClick={savePostClick} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
