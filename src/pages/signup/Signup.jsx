import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("jobseeker");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelSignup = (e) => {
    e.PreventDefault;
    if (password !== confirmPassword) {
      setMessage("Password not match");
      retun;
    }
    const registerEmail = localStorage.getItem("userEmail");
    if (email === registerEmail) {
      setMessage("Email already Register");

      retun;
    }
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    setMessage("account successfully created");
    navigate("/login");
  };

  return (
    <div className="signupPage">
      <div className="signupCard">
        <h1>Create Account</h1>
        <p className="signupSubtitle">Join us and find your next opportunity</p>
        <div className="roleSelection">
          <button
            className={role === "jobseeker" ? "activeRole" : ""}
            onClick={() => setRole("jobseeker")}
          >
            Job Seeker
          </button>

          <button
            className={role === "employer" ? "activeRole" : ""}
            onClick={() => setRole("employer")}
          >
            Employer
          </button>
        </div>
        <form onSubmit={handelSignup}>
          <div className="formGroup">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="terms">
            <input type="checkbox" />
            <span>I agree to the Terms & Conditions</span>
          </div>

          <button className="createAccount" type="submit">
            Create Account
          </button>
        </form>
        <p className="loginText">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
      {message && <div className={"loginMessage"}>{message}</div>}
    </div>
  );
}

export default Signup;
