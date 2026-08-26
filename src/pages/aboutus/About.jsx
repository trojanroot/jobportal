import React from "react";
import "./About.css";
// import image from "../../assets/aboutus/whoweare.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigation = useNavigate();

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="aboutHero">
            <div className="aboutHeroText">
              <h1>Connecting Talent With Opportunity</h1>
              <p>
                We help job seekers discover the right opportunities and connect
                companies with talented professionals.
              </p>
              <button onClick={() => navigation("/jobs")}>Find Jobs</button>
            </div>
          </div>
          <div className="whoWeAre">
            <div className="aboutImage"></div>
            <div className="aboutContent">
              <h2>Who We Are</h2>
              <p>
                Our job portal is designed to make job searching and recruitment
                easier, faster, and more effective.
              </p>
              <p>
                Whether you are a student looking for your first job, an
                experienced professional searching for a new challenge, or a
                company looking for talented employees, our platform helps you
                find the right match.
              </p>
            </div>
          </div>
          <div className="services">
            <h2>What We Offer</h2>

            <div className="serviceCards">
              <div className="serviceCard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="none"
                    stroke="rgb(33, 33, 237)"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
                  />
                </svg>
                <h3>Find Jobs</h3>
                <p>
                  Search and discover jobs based on your skills, location, and
                  interests.
                </p>
              </div>
              <div className="serviceCard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 0h16v16H0z" fill="none" />
                  <g fill="currentColor">
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                  </g>
                </svg>
                <h3>Explore Companies</h3>
                <p>
                  Discover companies and learn about their available career
                  opportunities.
                </p>
              </div>
              <div className="serviceCard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2m5 9h6m-6 4h3"
                    />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  </g>
                </svg>
                <h3>Easy Applications</h3>
                <p>
                  Apply for suitable jobs quickly and manage your applications
                  easily.
                </p>
              </div>
              <div className="serviceCard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                  >
                    <path d="m13.5 15.5l-2 2l-2-2v-4h4zM.5 11l9 2.647M16 6.5H7l1-3h7zm-4.5 8v-1" />
                    <path d="M.5 11V6.5h22V11l-9 2.647" />
                    <path d="M1.5 11.294V22.5h20V11.294" />
                  </g>
                </svg>
                <h3>Career Growth</h3>
                <p>
                  Find opportunities that help you build and grow your career.
                </p>
              </div>
            </div>
          </div>
          <div className="whyUs">
            <h2>Why Choose Us?</h2>
            <div className="whyCards">
              <div>
                <h3>Easy to Use</h3>
                <p>Simple and user-friendly job searching experience.</p>
              </div>
              <div>
                <h3>Quality Opportunities</h3>
                <p>
                  Discover relevant job opportunities from different industries.
                </p>
              </div>
              <div>
                <h3>Career Focused</h3>
                <p>We help you take the next step toward your career goals.</p>
              </div>
            </div>
          </div>
          <div className="stats">
            <div>
              <h2>10K+</h2>
              <p>Jobs</p>
            </div>
            <div>
              <h2>5K+</h2>
              <p>Companies</p>
            </div>
            <div>
              <h2>20K+</h2>
              <p>Job Seekers</p>
            </div>
            <div>
              <h2>95%</h2>
              <p>Satisfaction</p>
            </div>
          </div>
          <div className="aboutCTA">
            <h2>Ready to Find Your Next Opportunity?</h2>
            <p>Start exploring jobs and take the next step in your career.</p>
            <button onClick={() => navigation("/jobs")}>Explore Jobs</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
