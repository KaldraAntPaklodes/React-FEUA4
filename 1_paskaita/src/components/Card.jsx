import PropTypes from "prop-types"

function Card(props){
    return(
        <div id="cardBox">
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string
}

export default Card