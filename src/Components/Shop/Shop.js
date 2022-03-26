import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

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

                <div className="bg-light col-md-8 border border-secondary border-3 rounded mx-1">
                        {
                        products.map(product =><Product
                                key = {product.id}
                                product = {product}
                                handleAddtoCart = {handleAddtoCart}
                        ></Product>)
                    }
                </div>

                <div className="bg-light col-md-3 border border-secondary border-3 rounded mx-1">
                    <h3>This is cart</h3>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Shop;