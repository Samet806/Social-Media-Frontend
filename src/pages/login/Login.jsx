import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../ApiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
  
      loginCall(
        { email: email.current.value, password: password.current.value },
        dispatch
      );
     
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              name="email"
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              minLength="6"
              name="password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ?  <CircularProgress color="secondary" /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            {isFetching ?  <CircularProgress color="secondary" /> : "Create a New Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
