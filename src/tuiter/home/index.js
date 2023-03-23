import React from "react";
import WhatsHappening from "./whats-happening";
import "./index.css";
import TuitList from "../tuits/TuitList";
const HomeComponent = () => {
  return (
    <>
      <WhatsHappening />
      <TuitList />
    </>
  );
};

export default HomeComponent;
