import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    } , [])

    const handleAddtoCart = (product) =>{
        console.log(product);
    }
    return (
        <div>
            <div className="container my-5">
            
            <div className="row ">
                <div className="product-container col-md-8">
                        {
                        products.map(product =><Product
                                key = {product.id}
                                product = {product}
                                handleAddtoCart = {handleAddtoCart}
                        ></Product>)
                    }
                </div>
                
                <div className="cart col-md-3 border border-secondary border-1 rounded mx-auto">
                    <h3 className='bg-secondary text-center mt-2'>Selected Item</h3>
                </div>

                
            </div>
            
            </div>
            </div>
        
    );
};

export default Shop;