import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const PostList = (st) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get("http://localhost:5000/posts")
        .then((response) => setPosts(response.data))
        .catch((error) => console.error(error));
    };

    fetchPosts();

    if (st) {
      fetchPosts();
    }
  }, [st]);

  const tableStyle = {
    width: "50%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
  };

  return (
    <div className="root">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Content</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td style={tdStyle}>{post.title}</td>
              <td style={tdStyle}>{post.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
