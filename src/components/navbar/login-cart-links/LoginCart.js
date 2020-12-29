import React from 'react';
import './login-cart.css'

const LoginCart = (props) => {
    return (
        <div className='login-cart-container'>
                <li>Contact</li>
                <li>Sign in</li>
                <div className='cart-nav-div'>
                    <span className='notification'>2</span>
                    <li onClick={props.toggleCart}>Cart</li>
                </div>
                
        </div>
    );
};

export default LoginCart;



