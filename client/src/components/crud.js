import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import PostList from "./PostList";

const Crud = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [change, setChange] = useState(false);

  const styles = {
    padding: "12px 20px",
    margin: "8px",
    border: "1px solid",
    borderRadius: "10px",
    boxSizing: "border-box",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://localhost:5000/posts/post`;

    try {
      const response = await axios.post(url, {
        title,
        content,
      });

      setMessage("Post created successfully");
      setTitle("");
      setContent("");
      setChange(true);
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(
          error.response.data.message || "An error occurred. Please try again."
        );
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            className="input"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            style={styles}
            required
          />
          <input
            type="text"
            value={content}
            className="input"
            placeholder="Enter content"
            onChange={(e) => setContent(e.target.value)}
            style={styles}
            required
          />
          <Button label="Send" onClick={handleSubmit} />
        </div>
      </form>
      <PostList st={change} />
    </div>
  );
};

export default Crud;
