import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
     const user={
      name:"User name",
      email:email,
    };
    localStorage.setItem("user",JSON.stringify(user));
    navigate("/")

    const registerEmail = localStorage.getItem("userEmail");
    const registerPassowrd = localStorage.getItem("userPassword");

    if (email === registerEmail && password === registerPassowrd) {
      setMessage("Login Successful");
    } else if (email === registerEmail && password !== registerPassowrd) {
      setMessage("Incorrect Password");
    } else {
      setMessage("Email Not Registered");
    }
  };
  return (
    <>
      <div className="page">
        <div className="contain">
          <div className="heading">
            <h3>Welcome Back!</h3>
            <p>Log in to continue to your account</p>
          </div>
          <div className="form">
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="loginOption">
                <lable className="remeber">
                  <input type="checkbox" />
                  Remember Me
                </lable>
                <span onClick={() => navigate("/")}>Forget Password</span>
              </div>
              <div className="loginButton">
                <button type="submit">Login </button>
              </div>
            </form>
          </div>

          <div className="loginBOptions">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Google
            </button>

            <button>
              <svg
                width="30"
                height="30"
                viewBox="0 0 164 163"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M164 81.7994C164 36.6232 127.287 0 82 0C36.713 0 0 36.6232 0 81.7994C0 120.16 26.4762 152.35 62.1921 161.191V106.797H45.2837V81.7994H62.1921V71.028C62.1921 43.1868 74.8234 30.2821 102.224 30.2821C107.42 30.2821 116.384 31.2997 120.051 32.314V54.9725C118.116 54.7696 114.754 54.6682 110.579 54.6682C97.1339 54.6682 91.9384 59.7495 91.9384 72.9585V81.7994H118.723L114.121 106.797H91.9384V163C132.535 158.108 164 123.622 164 81.7994Z"
                  fill="#0966FF"
                />
              </svg>
              Facebook
            </button>
          </div>

          <div className="signup">
            <p>Don't have an account?</p>
            <span onClick={() => navigate("/signup")}>Sign up</span>
          </div>
          {message && <div className={"loginMessage"}>{message}</div>}
        </div>
      </div>
    </>
  );
}

export default Login;
