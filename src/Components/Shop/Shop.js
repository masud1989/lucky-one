import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);

    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    } , [])

    const handleAddtoCart = (product) =>{
        // setCart(product)
        const newCart = [...cart, product]
        // console.log(newCart);
        if(newCart.length<=4){
            setCart(newCart);
        }
        else{
            window.alert('You can select 4 items at once')
        }
        

    }
    return (
        <div>
            <div className="container my-5">
            
            <div className="row ">
                <div className="product-container col-md-8 col-12">
                        {
                        products.map(product =><Product
                                key = {product.id}
                                product = {product}
                                handleAddtoCart = {handleAddtoCart}
                        ></Product>)
                    }
                </div>
                
                <div className="col-md-3 col-6 cart  border border-light border-3 rounded mx-auto">
                    
                    <Cart cart={cart}></Cart>

                </div>

                
            </div>
            
            </div>
            </div>
        
    );
};

export default Shop;