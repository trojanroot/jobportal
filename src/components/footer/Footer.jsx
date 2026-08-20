import React from 'react'
import {Link} from 'react-router-dom'
import "./Footer.css";
import facebook from "../../assets/footer/facebook.png"
import youtube from "../../assets/footer/youtube.png"
import twitter from "../../assets/footer/twitter.png"
import instagram from "../../assets/footer/instagram.png"
import logo from "../../assets/logo/logo.png"
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
            <Link to ="/about">About</Link>
            <Link to ="/contact">Contact</Link>
            <Link to ="/pricing">Pricing</Link>
            <Link to ="/blog">Blog</Link>
          </div>
          <div className="candidate">
            <h2>Candidate</h2>
            <Link to="#">Browser Jobs</Link>
            <Link to="#">Browser Employers</Link>
            <Link to="#">Candidate Dashboard</Link>
            <Link to="#">Saved Dashboard</Link>
          </div>
          <div className="employes">
            <h2>Employes</h2>
            <Link to="#">Post a Jobs</Link>
            <Link to="#">Browser Candidates</Link>
            <Link to="#">Employers Dashboard</Link>
            <Link to="#">Applications</Link>
          </div>
          <div className="support">
            <h2>Support</h2>
            <Link to="#">FAQs</Link>
            <Link to="#">Private Policy</Link>
            <Link to="#">Terms and Conditions</Link>
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
  )
}

export default Footer