import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/j5X37vp/Linked-In-Profile-Pic.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Welcome to my portfolio website! I am a graduate student at Concordia University pursuing MEng in Information Systems Security. I am a highly motivated and dedicated individual with a passion for software development and cybersecurity. My current education and experience have provided me with a solid foundation in the field and I am eager to apply my knowledge and skills to real-world projects.

        </p>
        <p className="a-desc">
          I am currently seeking a part-time job or summer internship in the field, and I am confident that my skills and experience make me a strong candidate for any opportunity that arises. I have a strong background in programming, with experience in a variety of languages including Javascript and Python. I am also well-versed in web development and have experience with HTML, CSS, and JavaScript. Additionally, my education in Information Systems Security has provided me with a deep understanding of cybersecurity principles.I am confident that my passion for software development and cybersecurity, combined with my skills and experience, make me an ideal candidate for any part-time job or summer internship in the field. I am excited to apply my skills and knowledge to real-world projects and to learn from industry professionals. Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experience align with your organization's needs.
        </p>
        <div className="a-award">
          <a href="https://www.hackerrank.com/certificates/455cd8a160cf"> <img src={Award} alt="" className="a-award-img" /></a>
          <div className="a-award-texts">
            <h4 className="a-award-title">Javascript Intermediate</h4>
            <p className="a-award-desc">
              Certified Javascript Intermediate by Hackerrank for solving intermediate level javascript problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
