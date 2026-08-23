import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [role, setRole] = useState("jobseeker");
  return (
    <div className="signupPage">
      <div className="signupCard">
        <h1>Create Account</h1>
        <p className="signupSubtitle">
          Join us and find your next opportunity
        </p>
        {/* <div className="roleSelection">

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

        </div> */}
        <form>
          <div className="formGroup">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="formGroup">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="formGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="formGroup">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <div className="terms">
            <input type="checkbox" />
            <span>
              I agree to the Terms & Conditions
            </span>
          </div>

          <button className="createAccount">
            Create Account
          </button>
        </form>
        <p className="loginText">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;