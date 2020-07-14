//functions that'll return objects
//each object is in the correct object that the action is expected to be

import{UserActionTypes} from './user.types'

export const setCurrentUser = user => ({
    //same type as expected in user reducer
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})