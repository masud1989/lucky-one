import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-brands fa-bitbucket } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart}) => {
    // const{cart} = props;
    console.log(cart);
    return (
        <div>
            {/* {cart.length >4?(window.alert("ok")) : */}
            
            <h3 className='bg-info text-white text-center mt-2'>Selected Item:{cart.length}</h3>
            {
                cart.map(item=>(
                    // 
                <div className='cart-item'>               
                    <h6 className='bg-light' key={item.id}><img src={item.img} alt=""/>{item.name}</h6>
                </div>   
              ))
            }
            <button className='btn btn-success mt-4 ps-5 pe-5'>Choose 1 for me</button>
            <button className='btn btn-danger mt-4 ps-5 pe-5'>Choose Again</button>


        </div>
    );
};

export default Cart;