import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate, Navigate, Outlet } from "react-router-dom";
import Login from "./components/auth/Login";
import "./_app.scss";

import Header from "./components/navbar/Header";
import HomeScreen from "./page/HomeScreen";
import { auth } from "./firebase";
import { logout, userLogin } from "./redux/user.action";

const Layout = ({ children }) => {
  return (
    <div className="quora">
      <Header />
      <div className="quora__content">
        {/* {children} */}
        {/* <Outlet /> */}
        <HomeScreen />
      </div>
    </div>
  );
};

function App() {
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(userLogin(authUser));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <div className="app__container">{user ? <Layout /> : <Login />}</div>;
  // return (
  //     <Routes>
  //   <div className="app__container">
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<HomeScreen />} />
  //       </Route>
  //       <Route path="login" element={<Login />} />
  //   </div>
  //     </Routes>
  // );
}

export default App;
