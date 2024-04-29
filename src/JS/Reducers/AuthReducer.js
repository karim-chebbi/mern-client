import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../ActionTypes/ActionTypes"

let initialState = {
    user: null,
    loadUser: false,
    success: null,
    errors: null,
    isAuth: false
}

const AuthReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case LOAD_USER:
            return {...state, loadUser: true}
        
        case REGISTER_USER:
            localStorage.setItem("token", payload.token)
            return {...state, loadUser: false, user: payload.newUser, success: payload.success, isAuth: true}
    
        case LOGIN_USER:
            localStorage.setItem("token", payload.token)
            return {...state, loadUser: false, user: payload.foundUser, success: payload.success, isAuth: true}
        
        case LOGOUT_USER:
            localStorage.removeItem("token")
            return {...state, loadUser: false, user: null, success: null, errors: null, isAuth: false}

        case CURRENT_USER:
            return {...state, user: payload, loadUser: false, isAuth: true}

        case FAIL_USER:
            return {...state, loadUser: false, errors: payload.errors}
        default:
            return state
    }
}

export default AuthReducer