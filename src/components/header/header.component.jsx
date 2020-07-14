import React from 'react';
import {Link} from 'react-router-dom';

//lets us modify our component to have access to redux
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <div className = 'header'>
        <Link className = 'logo-container' to = "/">
            <Logo className = 'logo' />
        </Link>
        <div className = 'options'>
            <Link className = 'option' to ='/shop'>
                SHOP
            </Link>
            <Link className = 'option' to = '/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                (<div className = 'option' onClick = {() => auth.signOut()}> SIGN OUT </div>
                ):
                (<Link className = 'option' to = '/signin'>
                    SIGN IN
                </Link>)
            }
            <CartIcon/>
        </div>
        { hidden ? null :
        <CartDropDown/>
        }
    </div>
)

//allows us to access the root reducer
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

//first arguent is the function that allows us to access the root reducer
export default connect(mapStateToProps)(Header);