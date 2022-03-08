import { useState, useEffect } from "react";
import {
  AssignmentIndOutlined,
  FeaturedPlayListOutlined,
  Home,
  LanguageOutlined,
  Menu,
  NotificationAddOutlined,
  PeopleAltOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import LogoImg from "../../images/logo.png";
import PopUpModal from "./Modal";

import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import "./header.scss";

const Header = () => {
  const [button, setButton] = useState(false);
  const [click, setClick] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { user } = useSelector((state) => state.login);
  const { photoURL } = user;

  const showMenu = () => {
    if (window.innerWidth <= 800) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showMenu();
  }, []);

  window.addEventListener("resize", showMenu);
  return (
    <div className="header">
      <div className="header__logo">
        <img src={LogoImg} alt="quora" />
      </div>
      {button ? (
        <div className="hamburger" onClick={() => setClick(!click)}>
          <Menu />
        </div>
      ) : (
        ""
      )}

      <div className={click ? "header__links active" : "header__links"}>
        <div className="header__links__nav">
          <div className="icon">
            <Home />
          </div>
          <div className="icon">
            <FeaturedPlayListOutlined />
          </div>
          <div className="icon">
            <AssignmentIndOutlined />
          </div>
          <div className="icon">
            <PeopleAltOutlined />
          </div>
          <div className="icon">
            <NotificationAddOutlined />
          </div>
          <div className="icon">
            <LanguageOutlined />
          </div>
        </div>
        <div className="header__links__search">
          <SearchOutlined className="header__links__search__icon" />
          <input type="text" placeholder="search..." />
        </div>
        <div className="header__links__action">
          <div className="header__links__action__avatar">
            <Avatar
              onClick={() => auth.signOut()}
              src={photoURL}
              className="avatar_icon"
            />
          </div>

          <Button onClick={() => setModalOpen(true)} className="add__quora">
            Add Quora
          </Button>
          <PopUpModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
