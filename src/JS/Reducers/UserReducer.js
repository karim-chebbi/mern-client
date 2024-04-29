import { ERROR_GET_USER, GET_ONE_USER, LOAD_GET_USER, SUCCESS_GET_USER } from "../ActionTypes/ActionTypes"


// initialState
const initialState = {
    load: false,
    success: null,
    fail: null,
    listUsers: [],
    oneUser: {},
}



// reducer function
const UserReducer = (state=initialState, {type, payload}) => {
    switch (type) {
    
    case LOAD_GET_USER:
        return {...state, load: true}

    case SUCCESS_GET_USER:
        return {...state, load: false, listUsers: payload}

    case ERROR_GET_USER:
        return {...state, load: false, fail: payload}
    
    case GET_ONE_USER:
        return {...state, oneUser: payload, load: false}

 
        default:
            return state
    }
}

// export
export default UserReducer