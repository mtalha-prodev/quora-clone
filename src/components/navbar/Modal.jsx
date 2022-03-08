import { ArrowDropDown, PeopleAltOutlined } from "@mui/icons-material";
import { Avatar, Button, Input } from "@mui/material";

import { Link } from "@mui/icons-material";

import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import db from "../../firebase";

Modal.setAppElement("#root");

const PopUpModal = ({ modalOpen, setModalOpen, user }) => {
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const { photoURL, displayName, email } = user;

  const handleQuestion = (e) => {
    e.preventDefault();

    setModalOpen(false);

    db.collection("questions").add({
      question: input,
      imageUrl: inputUrl,
      timeStemp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user,
    });

    setInput("");
    setInputUrl("");
  };

  return (
    <>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <div className="modal__body">
          <div className="modal__body__link">
            <h4>add question</h4>
            <h5>Share Link</h5>
          </div>
          <div className="modal__body__info">
            <div className="modal__body__info__user">
              <Avatar src={photoURL} className="avatar" />
              <p>{displayName ? displayName : email}</p>
              <p>asked</p>
            </div>
            <div className="modal__body__info__share">
              <PeopleAltOutlined />
              <p>public</p>
              <ArrowDropDown />
            </div>
          </div>

          <div className="modal__body__field">
            <Input
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="modal__input"
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc"
            />

            <div className="modal__body__field__link">
              <Link />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="field__link"
                type="text"
                placeholder="Optional: include a link that gives context"
              />
            </div>
          </div>
          <div className="modal__btn">
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={handleQuestion}>Add QUESTION</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PopUpModal;
