//we create redux files for the cart drop down because we don't know if the only way that we want to hide the dropdown is via click

import CartActionTypes from './cart.types';
import{addItemToCart} from './cart.utils'
;
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                //uses util to add item
            //action.payload == item we want to add
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;