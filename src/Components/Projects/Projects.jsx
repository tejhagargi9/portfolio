import { useState } from "react"
import SingleProject from "../SingleProject/SingleProject"
import "./Projects.css"

// images 
import bubble1 from "../../assets/images/bubble/7.jpg"
import bubble2 from "../../assets/images/bubble/8.jpg"
//bulk downloader
import codebro1 from "../../assets/images/codebro/2.jpg"
import codebro2 from "../../assets/images/codebro/1.jpg"
import codebro3 from "../../assets/images/codebro/3.jpg"

//mathivities
import gym1 from "../../assets/images/gym/4.jpg"
import gym2 from "../../assets/images/gym/5.jpg"
import gym3 from "../../assets/images/gym/6.jpg"


import arrow from "../../assets/icons/view-more-arrow.svg"


function Projects() {
  const [projects, setProjects] = useState([{
    name : "CodeBro",
    description : "Codebro is a problem-solving platform built as a MERN website. Users can solve coding problems categorized by difficulty levels, compare their performance with others on a leaderboard, and are assigned ranks based on their achievements and progress.",
    stack : ["ReactJS", "ExpressJS", "NodeJS", "MongoDB"],
    images: [codebro1, codebro2, codebro3],
    links : ["https://codebrowebsite.vercel.app/", "https://github.com/Ganesh-Mk/CodeBro"]
  },
  {
    name : "Animal/Herd Tracking System : (Group Management & Alerts)",
    description : "Our animal tracking solution ensures your animals' safety with real-time position monitoring and alerts when they leave designated safe zones. With a user-friendly interface and precise tracking, you can effortlessly keep them secure.",
    stack : ["ReactJS", "ExpressJS", "NodeJS", "MongoDB"],
    images: [codebro1, codebro2, codebro3],
    links : ["https://youtu.be/z1eEwrPIamI?si=Lo1YEFR1iKI_3TQ7","https://github.com/Ganesh-Mk/AnimalTracker"],

  },
  {
    name : "Gym Landing Page",
    description : `Gym landing page is designed to motivate and engage fitness enthusiasts. With a sleek, user-friendly interface, it showcases our state-of-the-art facilities, expert trainers, and various membership plans. Visitors can explore class schedules, view testimonials, and sign up effortlessly—all in one place.`,
    stack : ["ReactJS", "CSS"],
    images: [gym1, gym2, gym3],
    links : ["https://crossfit-gym-landing-page.netlify.app/", "https://github.com/tejhagargi9/CrossFit-Gym-Landing-Page"]
  },
  {
    name : "Bubble Game",
    description : "Our bubble game offers fast-paced fun with a 1-minute timer and a scoring system where each hit earns 10 points. The game is fully responsive, ensuring an engaging experience across all devices. Perfect for quick challenges and testing your reflexes!",
    stack : ["HTML", "CSS", "JavaScript"],
    images: [bubble1, bubble2],
    links : ["https://tejhagargi9.github.io/Bubble-Game/", "https://github.com/tejhagargi9/Bubble-Game"]
  }])

  const mappedProjects = projects.map(({name, description, stack, images, links, video})=>{
    return <SingleProject key={name} name={name} description={description} stack={stack} images={images} links={links} video={video} />
  })
  return (
    <section className="projects">
        <div className="projects-inner">
            <h1 id="projects">PROJECTS</h1>
            
            <div className="projects-container">
            {mappedProjects}
            </div>

              <button style={{marginBottom: "20px", cursor: "default"}} className="view-more">
              App projects are on the way
            </button>
            <a href="https://github.com/tejhagargi9?tab=repositories" target="_blank" >
              <button className="view-more">
              View more on Github 
              <img src={arrow} alt="" />
            </button>
            </a>
            
        </div>
    </section>
  )
}

export default Projects