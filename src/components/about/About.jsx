import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            // src="https://i.ibb.co/r7ZFYyc/about.jpg"
            src="https://i.ibb.co/BNFn89m/photo.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a React developer having knowledge of working with react libraries and state management workflows like Redux.
        </p>
        <p className="a-desc">
          I am an enthusiastic learner who knows the importance of applying skills to modern-day projects. I am proficient in JavaScript.
          I have hands on experience building beautiful looking, responsive and functioning React web applications.I am in venture of opportunities that can help me skill up and help me learn, contribute and build my career.
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
