import email from "../../assets/icons/email-icon.svg" 
import arrow from "../../assets/icons/light-arrow.svg"
import linkedin from "../../assets/icons/linkedin.png"
import github from "../../assets/icons/github-2-icon.svg"
import "./ContactMe.css"

function ContactMe() {
  return (
    <section className="contact">
        <div className="contact-inner">
            <h1 id="contact">CONNECT WITH ME</h1>

            <div className="contact-container">
                <div className="email">
                    <div className="icon-container">
                        <img src={email} alt="email icon" />
                    </div>

                    <a title="en56434@gmail.com" href="mailto:tejhagargi9@gmail.com" target="_blank" className="email-link">
                        Send me an email <img src={arrow} alt="arrow" />
                    </a>
                </div>

                <div className="twitter">
                    <div className="icon-container">
                        <img style={{width: "55px", height: "55px"}} src={linkedin} alt="twitter icon" />
                    </div>

                    <a href="https://www.linkedin.com/in/tej-hagargi-/" target="_blank" className="twitter-link">
                        Message me on LinkedIn <img src={arrow} alt="arrow icon" />
                    </a>
                </div>

                <div className="github">
                    <div className="icon-container">
                        <img src={github} alt="github icon" />
                    </div>

                    <a target="_blank" href="https://github.com/tejhagargi9" className="github-link">
                        Check out my Github<img src={arrow} alt="arrow icon" />
                    </a>
                </div>
            </div>

            <p className="attr">
            Crafted with Care | Built with Purpose
            </p>
        </div>
    </section>
  )
}

export default ContactMe