import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import Widget from "../components/widget/Widget";

const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <Feed />
      <Widget />
    </>
  );
};

export default HomeScreen;
