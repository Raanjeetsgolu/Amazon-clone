import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
// import { auth } from "./firebase";
const Login = () => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const signUp = (e) => {
    e.preventDefault();
  }
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       // it successfully created a new user with email and password
  //       if (auth) {
  //         history.push("/");
  //       }
  //     })
  //     .catch((error) => alert(error.message));
  // };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>
      <h1>Sign in</h1>
      <form className="login_form">
        <h5>Email</h5>
        <input
          id="email"
          type="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <h5>Password</h5>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit" onClick={signIn} className="login_signinbutton">
          Sign In
        </button>
      </form>
      <button type="submit" onClick={signUp} className="login_registerbutton">
        Create Amazon Account
      </button>
    </div>
  );
};

export default Login;
