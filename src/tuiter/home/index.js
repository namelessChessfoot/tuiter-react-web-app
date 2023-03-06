import React from "react";
import PostItem from "./post-item";
import posts from "./posts";
import "./index.css";
const HomeComponent = () => {
  return (
    <ul className="list-group">
      {posts.map((p) => (
        <PostItem key={p.avatar} post={p} />
      ))}
    </ul>
  );
};

export default HomeComponent;
