import React from "react";
import "./underConstruction.css";
import { useNavigate } from "react-router-dom";
import img from "../../assets/underConstruction/underconstruction.png";
import facebook from "../../assets/footer/facebook.png";
import youtube from "../../assets/footer/youtube.png";
import twitter from "../../assets/footer/twitter.png";
import instagram from "../../assets/footer/instagram.png";

function underConstruction() {
  const navigation = useNavigate();

  return (
    <>
      <div className="container">
        <div className="construction">
          <div className="containerHeading">
            <h1>Our website is under construction</h1>

            <p>
              We're working hard to bring this page to you.
              <br />
              Please check back soon!
            </p>

            <button onClick={() => navigation("/")}>Back To Home</button>
          </div>
          <div className="containerImg">
            <img src={img} alt="image" />
          </div>
        </div>
        
        <h3>Follow us</h3>
        <div className="socialMedia">
          <img src={facebook} alt="facebook" />
          <img src={youtube} alt="youtube" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </>
  );
}

export default underConstruction;
