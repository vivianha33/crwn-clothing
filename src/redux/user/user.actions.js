//functions that'll return objects
//each object is in the correct object that the action is expected to be

export const setCurrentUser = user => ({
    //same type as expected in user reducer
    type: 'SET_CURRENT_USER',
    payload: user
})