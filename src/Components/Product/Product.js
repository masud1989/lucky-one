import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <div className="product-info">
                <p>Price: {price} </p>
                <p> <small>Seller: {seller} </small></p>
                <p> <small>Ratings: {ratings} stars</small></p>
            </div>
            <div className="btn mb-2">
                <button onClick={() => props.handleAddtoCart(props.product)} className='  btn btn-info d-flex'>
                    <p className='m-2 fw-bold text-white '>Add to Cart</p>
                    <span className='m-2 text-white'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
            </button>
            </div>
        </div>
    );
};

export default Product;