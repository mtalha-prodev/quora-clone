import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "../../firebase";
import "./feed.scss";
import FeedBox from "./FeedBox";
import Post from "./Post";

const Feed = () => {
  const [post, setPost] = useState([]);

  // const fetchData = async () => {
  //   const userData = await db.collection("questions").get();
  //   setPost(userData.docs.map((doc) => ({ id: doc.id, question: doc.data() })));
  // };
  useEffect(() => {
    db.collection("questions")
      .get()
      .then((snapshot) =>
        setPost(
          snapshot.docs.map((doc) => ({ id: doc.id, question: doc.data() }))
        )
      );
  }, [post]);

  return (
    <div className="feed">
      <FeedBox />
      {post.map(({ id, question }) => (
        <Post
          key={id}
          id={id}
          question={question.question}
          image={question.imageUrl}
          timeStamp={question.timeStemp}
          user={question.user}
        />
      ))}
    </div>
  );
};

export default Feed;
