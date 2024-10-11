import myImage from "../../assets/images/photo1.jpg";
import "./AboutMe.css";
import React from "react";
import { Timeline } from "primereact/timeline";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function AboutMe() {
  const d = new Date();
  let years = d.getFullYear() - 2021;

  const events = [
    {
      status: "BCA (Bachelor's of Computer Applications)",
      institution: "KLE SOCIETY'S COLLEGE OF BCA, GOKAK",
      score: "9.1 CGPA till 4th semester",
      year: "2025 (expected)",
      icon: "pi pi-book",
      color: "#9C27B0",
    },
    {
      status: "12th Senior Secondary Education",
      institution: "KLE's CS ANGADI PU COLLEGE, GOKAK",
      score: "91.66%",
      year: "2022",
      icon: "pi pi-book",
      color: "#673AB7",
    },
    {
      status: "10th High School",
      institution: "Modern English Medium School, Gokak",
      score: "78.88%",
      year: "2020",
      icon: "pi pi-book",
      color: "#FF9800",
    },
    {
      status: "Full Stack Developer - Intern",
      institution: "NITAI INNOVATIONS PRIVATE LIMITED, DHARWAD",
      type: "Hybrid",
      year: "July 2024 - Current",
      icon: "pi pi-briefcase",
      color: "#607D8B",
    },
  ];

  return (
    <section className="about">
      <div className="about-me-inner">
        <h1 id="about">ABOUT ME</h1>

        <div className="about-me-container">
          <img src={myImage} alt="an image of Tej Hagargi" />

          <div className="about-me-text-content">
            <p>
              Hey there! My name is <b>Tej Hagargi</b>, and I’m currently
              pursuing a Bachelor's in Computer Applications (BCA), 5<sup>th</sup> semester. I'm deeply
              passionate about coding and continuously learning new technologies
              that inspire me to innovate and create. Although I dabbled in web
              development before, my true passion emerged when I started taking
              it seriously. <br />
              Coding, designing, and spending an hour each day with my friends
              fill my days with excitement and joy. Whether it's exploring the
              latest tech trends or diving into a new programming challenge, I’m
              always eager to expand my horizons. <br />
              <br />
              Currently, I am learning React Native to build native
              applications and tackling DSA problems to strengthen my
              problem-solving skills. I believe that every day is an opportunity
              to grow and improve, and I’m excited to see where this journey
              takes me!
            </p>

            <a
              href="mailto:tejhagargi9@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <button>Send me a message</button>
            </a>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-section">
          <h2 id="timelineHeader">Education & Experience</h2>
          <Timeline
            value={events}
            align="alternate"
            content={(item) => (
              <div>
                <h4>{item.status}</h4>
                <p>{item.institution}</p>
                {item.score && <p>Score: {item.score}</p>}
                <p>{item.year}</p>
              </div>
            )}
            marker={(item) => (
              <span
                className="custom-marker"
                style={{ backgroundColor: item.color }}
              >
                <i className={item.icon}></i>
              </span>
            )}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
