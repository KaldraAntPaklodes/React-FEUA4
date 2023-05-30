import PropTypes from "prop-types"

function ListGenerator(props){
    return(
        <div id="cardBox">
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

ListGenerator.propTypes = {
    title: PropTypes.string
}

export default ListGenerator