import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss';

const CartDropDown = () => (
    <div className = 'cart-dropdown'>
        <div className = 'cartItems'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropDown