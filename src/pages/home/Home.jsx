import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import background from "../../assets/homeimage/background.png";
import google from "../../assets/homeimage/google.png";
import apple from "../../assets/homeimage/apple.png";
import intel from "../../assets/homeimage/intel.png";
import search from "../../assets/homeimage/search.png";
import location from "../../assets/homeimage/location.png";

function Home() {
  const navigate = useNavigate();

const handleApply=()=>{
  const user =localStorage.getItem("user");
  if(!user){
    navigate("/login");
    return;
  }
  navigate("/apply");
}
  return (
    <>
      <section id="main">
        <div className="container">
          <div className="mainItem">
            <img src={background} alt="img" />
            <div className="mainContain">
              <h3>Find Your Dream Job Today!</h3>
              <p>
                Connecting Talent with Opportunity: Your Gateway to Career
                Success
              </p>
            </div>
            <div className="mainSearch">
              <div className="search">
                <img src={search} alt="search" />
                <p>Job tittle, Keyword...</p>
              </div>
              <div className="location">
                <img src={location} alt="Location" />
                <p>Location</p>
              </div>
              <div className="action">
                <button onClick={() => navigate("/jobs")}>Find Job</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="vacancies">
        <div className="container">
          <div className="Mvacancies">
            <h3>Most Popular Vacancies</h3>
            <div className="boxes">
              <div className="box">
                <h4>Anesthesiologists</h4>
                <p>45,904 Open Positions</p>
              </div>
              <div className="box">
                <h4>Software Developer</h4>
                <p>43,359 Open Positions</p>
              </div>
              <div className="box">
                <h4>IT Manager</h4>
                <p>50,105 Open Positions</p>
              </div>
              <div className="box">
                <h4>Financial Manager</h4>
                <p>61,391 Open Positions</p>
              </div>
              <div className="box">
                <h4>Surgeons</h4>
                <p>50,364 Open Positions</p>
              </div>
              <div className="box">
                <h4>Operations Research Analysis</h4>
                <p>16,627 Open Positions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="feature">
        <div className="container">
          <div className="featureJobs">
            <h3>Features Jobs</h3>
            <p>Choose jobs from the top employers and apply for the same.</p>
          </div>
          <div className="featureCards">
            <div className="card">
              <div className="cardHeading">
                <h4>Technical Support Specialist</h4>
                <p>
                  <span className="one">Part-time </span>
                  Salary: NRS 20,000 - NRS 25,000
                </p>
              </div>
              <div className="cardName">
                <img src={google} alt="google" />
                <p>Google Inc.</p>
                <p>Kathmandu,Nepal</p>
              </div>
              <div className="cardAction">
                <button className="viewDetails">View Details</button>
                <button className="applynow" onClick={handleApply}>Apply Now</button>
              </div>
            </div>
            <div className="card">
              <div className="cardHeading">
                <h4>Senior UI/UX Designer</h4>
                <p>
                  <span className="two">Full-time </span>
                  Salary: $30,000 - $55,000
                </p>
              </div>
              <div className="cardName">
                <img src={apple} alt="google" />
                <p>Apple</p>
                <p>Boston, USA</p>
              </div>
              <div className="cardAction">
                <button className="viewDetails">View Details</button>
                <button className="applynow" onClick={handleApply}>Apply Now</button>
              </div>
            </div>
            <div className="card">
              <div className="cardHeading">
                <h4>Marketing Officer</h4>
                <p>
                  <span className="one">Part-time </span>
                  Salary: NRS15,000 - NRS35,000
                </p>
              </div>
              <div className="cardName">
                <img src={intel} alt="google" />
                <p>Intel Corp</p>
                <p>Pokhara,Nepal</p>
              </div>
              <div className="cardAction">
                <button className="viewDetails" >View Details</button>
                <button className="applynow" onClick={handleApply}>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
