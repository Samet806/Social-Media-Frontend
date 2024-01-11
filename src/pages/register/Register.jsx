import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./register.css";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const passwordAgain = useRef();
  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value!== password.current.value)
    {
      password.current.setCustomValidity("Passwords do not match");
    }
    else{
      const user={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
      }
      try{
       await axios.post("/auth/register",user);
        navigate("/login");
      }catch(err)
      {
        console.log(err);
      }
    
    }
  
  };
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
            <input placeholder="Username" required type="text" ref={username} className="loginInput" />
            <input placeholder="Email" required type="email" ref={email} className="loginInput" />
            <input placeholder="Password" required ref={password} type="password" minLength="6" className="loginInput" />
            <input placeholder="Password Again" required ref={passwordAgain} type="password" minLength="6" className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton" onClick={()=> navigate("/login")}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
