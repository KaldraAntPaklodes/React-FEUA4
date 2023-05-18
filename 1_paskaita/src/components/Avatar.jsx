import PropTypes from "prop-types";

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let color = "rgb(" + r + ", " + g + ", " + b + ")";

  return color;
}

function getFirstLetters(str) {
    const nameAndLastName = str.split(" ");
  
    const firstLetters = nameAndLastName.map(word => word.charAt(0));
  
    return firstLetters.join("");
}
    
function Avatar(props) {
  const avatarColor = {
    backgroundColor: getRandomColor()
  };
  let initials = getFirstLetters(props.name);

  return <div id="avatarCircle" style={avatarColor}>
    <h2>{initials}</h2>
  </div>;
}

Avatar.propTypes = {
    title: PropTypes.string
};

export default Avatar;