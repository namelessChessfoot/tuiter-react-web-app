import React from "react";
// import PostItem from "./post-item";
// import posts from "./posts";
import "./index.css";
import TuitList from "../tuits/TuitList";
const HomeComponent = () => {
  return (
    <ul className="list-group">
      <TuitList />
    </ul>
  );
};

export default HomeComponent;
