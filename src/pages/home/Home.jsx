import React from 'react'
import "./Home.css";
import background from "../../assets/homeimage/background.png";


function Home() {
  return (
    <>
      <section id='main'>
        <div className="container">
          <div className="mainItem">
            <img src={background} alt="img" />
          </div>
          <div className="mainContain">
            <h3>Find Your Dream Job Today!</h3>
            <p>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
          </div>
          <div className="mainSearch">
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mainPVacancies">
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
      
    </>
  )
}

export default Home