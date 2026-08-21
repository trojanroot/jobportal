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
                <h4>Junior Graphic Designer</h4>
                <p>
                  <span className="one">Part-time </span>
                  Salary: $50,000 - $70,000
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
                <h4>Visual Designer</h4>
                <p>
                  <span className="two">Full-time </span>
                  Salary: $35,000 - $40,000
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
                <h4>Marketing Officer</h4>
                <p>
                  <span className="two">Full-time </span>
                  Salary: NRS 30,000 - NRS 35,000
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
                <h4>Interaction Designer</h4>
                <p>
                  <span className="two">Full-time </span>
                  Salary: NRP30,000 - NRP40,000
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
                <h4>Front End Developer</h4>
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
                <h4>Software Engineer</h4>
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
                <h4>Product Designer</h4>
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
                <h4>Networking Engineer</h4>
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
