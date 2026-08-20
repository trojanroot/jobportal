import React from "react";
import "./Jobs.css";
import search from "../../assets/homeimage/search.png";
import location from "../../assets/homeimage/location.png";
import google from "../../assets/homeimage/google.png";
import apple from "../../assets/homeimage/apple.png";
import intel from "../../assets/homeimage/intel.png";

function Jobs() {
  return (
    <>
      <section id="job">
        <div className="container">
          {/* <div className="jobHeading">
            <h2>Job Search</h2>
            <p>Search for your desired job matching your skills</p>
          </div>
          <div className="Search">
            <div className="jobsearch">
              <img src={search} alt="search" />
              <p>Job tittle, Keyword...</p>
            </div>
            <div className="joblocation">
              <img src={location} alt="Location" />
              <p>Location</p>
            </div>
            <div className="JobAction">
              <button>Find Job</button>
            </div>
          </div>
          <div className="allJob">
            <h3>All Jobs</h3>
            <p>Popular</p>
          </div> */}
          <div className="cardItems">
            <div className="cards">
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
                <button className="applynow">Apply Now</button>
              </div>
            </div>
            <div className="cards">
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
                <button className="applynow">Apply Now</button>
              </div>
            </div>
            <div className="cards">
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
                <button className="applynow">Apply Now</button>
              </div>
            </div>
            <div className="cards">
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
                <button className="applynow">Apply Now</button>
              </div>
            </div>
            <div className="cards">
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
                <button className="applynow">Apply Now</button>
              </div>
            </div>
            <div className="cards">
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
                <button className="applynow">Apply Now</button>
              </div>
            </div>
            <div className="cards">
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
                <button className="applynow">Apply Now</button>
              </div>
            </div>
            <div className="cards">
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
                <button className="applynow">Apply Now</button>
              </div>
            </div>
            <div className="cards">
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
                <button className="applynow">Apply Now</button>
              </div>
            </div>
            <div className="cards">
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
                <button className="applynow">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jobs;
