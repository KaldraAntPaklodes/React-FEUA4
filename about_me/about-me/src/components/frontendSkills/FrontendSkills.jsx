import "./FrontendSkills.css";
import { AiFillCode } from 'react-icons/ai'

const FrontendSkills = () => {
  return (
    <div className="skillsContainerBox">
      <div className="skillsContainer">
        <AiFillCode size={48}/>
        <h1>Frontend Developer</h1>
        <div>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </div>
        <h2>Languages I speak:</h2>
        <div>HTML, CSS, JavaSript</div>
        <h2>Dev tools:</h2>
        <div>
          Github, React
        </div>
      </div>
    </div>
  );
};

export default FrontendSkills;
