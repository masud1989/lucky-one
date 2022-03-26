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
            <button onClick={() => props.handleAddtoCart(props.product)} className='btn btn-info'>
                Add to Cart
            </button>
        </div>
    );
};

export default Product;