import PropTypes from "prop-types"

function Product(prop){
    return(
        <div id="productCard">
            <div id="category">{prop.category}</div>
            <div id="name">{prop.name}</div>
            <div id="price">{prop.price}</div>
        </div>
    )
}

Product.propTypes = {
    optonalObjectWithShape: PropTypes.shape({
        category: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number
    })
};

export default Product;