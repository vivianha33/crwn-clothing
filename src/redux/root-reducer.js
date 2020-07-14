//base reducer that represents all state of application, combines all other states
//bring user reducer in

//allows us to combine reducers
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    //key is the actual reducers we wrote
    user: userReducer,
    cart: cartReducer
})