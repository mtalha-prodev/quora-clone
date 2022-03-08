import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlineOutlined,
  MoreHorizOutlined,
  RepeatOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";
import "./post.scss";

const Post = ({ id, question, user, image, timeStamp }) => {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar src={user.photoURL} />
        <p>{user.displayName ? user.displayName : user.email}</p>
        <small>{new Date(timeStamp?.toDate()).toLocaleString()}</small>
      </div>
      <div className="post__body">
        <div className="post__body__question">
          <p>{question}</p>
          <Button className="answer__btn">Answer</Button>
        </div>
        <div className="post__body__answer">
          <p>Add Answers</p>
        </div>
        {image ? <img src={image} alt="" /> : ""}
      </div>
      <div className="post__footer">
        <div className="post__footer__action">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <div className="post__footer__shere">
          <RepeatOutlined />
          <ChatBubbleOutlineOutlined />
        </div>
        <div className="post__footer__left">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
  );
};

export default Post;
