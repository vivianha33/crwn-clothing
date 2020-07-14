//a reducer is just a function that gets 2 properties
    //state object which represents last/initial state
    //action - object that has a type, payload - can be anything

//we set an initial state, because the first time the app fires it userReducer needs a last/initial state
const INITIAL_STATE = {
    currentUser: null
};

//INITIAL_STATE is a default value
//switch statement allows us to return based on the action
    //if action.type is one of the cases...
//every single reducer gets everysingle action, even if action isn't related to reducer
const userReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            };
        
        default:
            return state;
    }
};

export default userReducer;