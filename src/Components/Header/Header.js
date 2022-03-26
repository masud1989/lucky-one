import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-container'>
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
        
    );
};

export default Header;