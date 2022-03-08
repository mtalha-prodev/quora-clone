import { useState } from "react";
import logoImg from "../../images/logo.png";
import { Button } from "@mui/material";
import googleImg from "../../images/google_icon.png";
import facebookImg from "../../images/facebook_icon.png";
import "./login.scss";
import { userLogin, userRegister } from "../../redux/user.action";
import { useDispatch } from "react-redux";
const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const loginEvent = (e) => {
    const { name, value } = e.target;
    setLogin((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(userLogin(login));

    setTimeout(() => {
      setLogin({
        email: "",
        password: "",
      });
    }, 1000);
  };

  const loginWithGoole = () => {
    dispatch(userLogin());
  };

  const regCreateWithEmail = () => {
    const { email, password } = login;
    if (email !== "" && password !== "") {
      dispatch(userRegister(login));
      alert("register");
    } else {
      alert("invalid email");
    }
  };

  return (
    <div className="login">
      <div className="login__content">
        <img src={logoImg} alt="quora logo" />
        <p>A place to share knowledge and better understand the world</p>
        <h4>HandCrafted With by</h4>
        <h5>Muhammad Talha</h5>
        <div className="login__content__body">
          <div className="login__content__body__left">
            <Button className="sign__btn" onClick={loginWithGoole}>
              <img className="g__icon" src={googleImg} alt="" />
              Continue With Google
            </Button>
            <Button className="sign__btn">
              <img className="f__icon" src={facebookImg} alt="" /> Continue With
              Facebook
            </Button>
            <Button className="sign__email" onClick={regCreateWithEmail}>
              Sign up with email
            </Button>
            <hr />
            <p>
              By continuing you indicate that you agree to Quora’s Terms of
              Service and Privacy Policy.
            </p>
          </div>
          <div className="login__content__body__right">
            <form onSubmit={loginSubmit} autoComplete="off">
              <h5>Login</h5>
              <hr />
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                placeholder="e-mail..."
                name="email"
                value={login.email}
                onChange={loginEvent}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password..."
                name="password"
                value={login.password}
                onChange={loginEvent}
              />
              <Button type="submit">Login</Button>
            </form>
          </div>
        </div>

        {/* login footer body  */}
        <div className="login__content__footer">
          <p>
            <span>New:</span> العربية ,עברית polski, ગુજરાતી, ಕನ್ನಡ, മലയാളം{" "}
            <span>and</span> తెలుగు
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
