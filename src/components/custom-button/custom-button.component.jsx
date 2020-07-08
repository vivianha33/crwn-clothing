import React from 'react'

import './custom-button.styles.scss'

//conditionally render a classname based off of a prop (isGoogleSignIn) 
//using string interpolation
//will render the class 'google-sign-in' if the property isGoogleSignIn is true, custom button always rendered
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button 
    className = { `${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} 
    {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton;