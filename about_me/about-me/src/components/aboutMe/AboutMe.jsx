import "./AboutMe.css";
import FrontendSkills from "../frontendSkills/FrontendSkills";

const AboutMe = () => {
  return (
    <div>
    <div className="aboutMeContainer">
      <h1 className="h1">Hi, I’m Tautvydas. Nice to meet you.</h1>
      <h3>
        I am currently enrolled in Codecademy's frontend courses for beginners.
        The courses started in December 2022 and are scheduled to end in July of
        this year. So far, I have completed the CSS, HTML and JavaScript modules
        and I am currently learning React.
      </h3>
    </div>  
    <FrontendSkills/>  
    </div>
  );
};

export default AboutMe;
