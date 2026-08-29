import React from "react";
import { useNavigate } from "react-router-dom";
import "./CareerTip.css";

function CareerTip() {
  const navigate = useNavigate();

  const tips = [
    {
      icon: "📄",
      title: "Build a Strong Resume",
      text: "Keep your resume clear, professional, and focused on your skills, experience, and achievements.",
    },
    {
      icon: "🎯",
      title: "Choose the Right Job",
      text: "Look for jobs that match your skills, experience, interests, and long-term career goals.",
    },
    {
      icon: "💬",
      title: "Prepare for Interviews",
      text: "Research the company, practice common questions, and prepare examples of your previous work.",
    },
    {
      icon: "💻",
      title: "Improve Your Skills",
      text: "Keep learning new technologies and skills that are relevant to your desired career.",
    },
    {
      icon: "🤝",
      title: "Build Your Network",
      text: "Connect with professionals, attend events, and build relationships within your industry.",
    },
    {
      icon: "🔎",
      title: "Search Smart",
      text: "Use relevant keywords and filters to find job opportunities that match your profile.",
    },
  ];

  return (
    <div className="container">
      <div className="careerPage">
        {/* Hero Section */}
        <section className="careerHero">
          <div className="container">
            <div className="careerHeroContent">
              <div className="careerHeroText">
                <span>CAREER TIPS</span>

                <h1>
                  Take the Next Step
                  <br />
                  in Your Career
                </h1>

                <p>
                  Get useful career advice, job search tips, resume guidance,
                  and interview strategies to help you find your dream job.
                </p>

                <button onClick={() => navigate("/jobs")}>Explore Jobs</button>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="careerTips">
          <div className="container">
            <div className="careerHeading">
              <h2>Career Tips for Job Seekers</h2>

              <p>
                Simple and practical tips to help you succeed in your job
                search.
              </p>
            </div>

            <div className="tipsGrid">
              {tips.map((tip, index) => (
                <div className="tipCard" key={index}>
                  <div className="tipIcon">{tip.icon}</div>

                  <h3>{tip.title}</h3>

                  <p>{tip.text}</p>

                  <button>Read More →</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="resumeSection">
          <div className="container">
            <div className="resumeContent">
              <div>
                <span>MAKE A GREAT FIRST IMPRESSION</span>

                <h2>Your Resume Is Your First Impression</h2>

                <p>
                  A well-written resume can help you stand out from other
                  candidates. Highlight your strongest skills and experience.
                </p>

                <button onClick={() => navigate("/jobs")}>Find Jobs</button>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Tips */}
        <section className="interviewSection">
          <div className="container">
            <h2>Quick Interview Tips</h2>

            <div className="interviewTips">
              <div>
                <strong>01</strong>
                <h3>Research the Company</h3>
                <p>
                  Learn about the company's products, services, culture, and
                  recent achievements.
                </p>
              </div>

              <div>
                <strong>02</strong>
                <h3>Practice Your Answers</h3>
                <p>
                  Prepare answers for common interview questions and practice
                  speaking confidently.
                </p>
              </div>

              <div>
                <strong>03</strong>
                <h3>Be Confident</h3>
                <p>
                  Maintain good communication, listen carefully, and confidently
                  explain your skills.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CareerTip;
