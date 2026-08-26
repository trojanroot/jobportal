import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import facebook from "../../assets/footer/facebook.png";
import youtube from "../../assets/footer/youtube.png";
import twitter from "../../assets/footer/twitter.png";
import instagram from "../../assets/footer/instagram.png";
import logo from "../../assets/logo/logo.png";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footerContain">
              <div className="footerHeading">
                <div className="fHead">
                  <img src={logo} alt="" />
                  <h2>Job Portal</h2>
                </div>
                <p>Call Now : (+977 9765970087)</p>
                <p>Kapan, 11-budhanilkantha, Kathmandu</p>
              </div>
              <div className="footerquickLinks">
                <h2>Quick Links</h2>
                <Link to="/about">About</Link>
                <Link to="/underconstruction">Contact</Link>
                <Link to="/underconstruction">Blog</Link>
              </div>
              <div className="candidate">
                <h2>Candidate</h2>
                <Link to="/underconstruction">Browser Jobs</Link>
                <Link to="/underconstruction">Browser Employers</Link>
                <Link to="/underconstruction">Candidate Dashboard</Link>
                <Link to="/underconstruction">Saved Dashboard</Link>
              </div>
              <div className="employes">
                <h2>Employes</h2>
                <Link to="/underconstruction">Post a Jobs</Link>
                <Link to="/underconstruction">Browser Candidates</Link>
                <Link to="/underconstruction">Employers Dashboard</Link>
                <Link to="/underconstruction">Applications</Link>
              </div>
              <div className="support">
                <h2>Support</h2>
                <Link to="/underconstruction">FAQs</Link>
                <Link to="/underconstruction">Private Policy</Link>
                <Link to="/underconstruction">Terms and Conditions</Link>
              </div>
            </div>
            <hr />
            <div className="footerend">
              <div className="copyRight">
                <p>@ 2026 Job Portal. All rights Rserved</p>
              </div>
              <div className="socialMedia">
                <img src={facebook} alt="facebook" />
                <img src={youtube} alt="youtube" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
