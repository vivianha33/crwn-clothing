//utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) =>{
    //checks if the cartItem already exsists
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    //if it already exsists then use map to create a new array so things render properly
    if(existingCartItem){
        return cartItems.map(cartItem => 
            //if the cartItem id matches the id we're adding then add 1 to quanity, otherwise don't change it
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }

    //creates new array with exsisting cartItems, adds cartItem and sets quantity to 1
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}