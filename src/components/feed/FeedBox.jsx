import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const FeedBox = () => {
  const { user } = useSelector((state) => state.login);

  const { photoURL, displayName } = user;

  return (
    <div className="feed__box">
      <div className="feed__box__detail">
        <Avatar src={photoURL} />
        <p>{displayName}</p>
      </div>
      <p className="feed__box__question">What is your question or link?</p>
    </div>
  );
};

export default FeedBox;
