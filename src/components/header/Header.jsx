import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo/logo.png";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="container">
          <div className="headerItems">
            <div className="headerLogo">
              <img src={logo} alt="img" />
              <h4>Job Portal</h4>
            </div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/jobs">Find Jobs</Link>
              <Link to="/companies">Companies</Link>
              <Link to="/about">AboutUS</Link>
              <Link to="/careertip">Career Tips</Link>
            </nav>
            <div className="headerActions">
              <span>
                <svg
                  width="2em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="2em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 21H14C14 22.1 13.1 23 12 23C10.9 23 10 22.1 10 21ZM21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19ZM17 11C17 8.2 14.8 6 12 6C9.2 6 7 8.2 7 11V18H17V11Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span onClick={() => navigate("/login")} >
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 32 32"
                >
                  <path d="M0 0h32v32H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"
                  />
                  <path
                    fill="currentColor"
                    d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.9 11.9 0 0 1-12 0m13.993-1.451A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0"
                  />
                </svg>
              </span>
              {/* <button className="login" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="signup" onClick={() => navigate("/signup")}>
                Sign up{" "}
              </button> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
