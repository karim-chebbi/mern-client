import axios from 'axios'
import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../ActionTypes/ActionTypes'


// register
export const register = (newUser, navigate) => async (dispatch) => {
    dispatch({type: LOAD_USER})
    try {
        const result = await axios.post('/api/auth/register', newUser)
        dispatch({type: REGISTER_USER, payload: result.data})
        navigate('/')
    } catch (error) {
        dispatch({type: FAIL_USER, payload: error.response.data.errors})
    }
}

// login
export const login = (user, navigate) => async (dispatch) => {
    dispatch({type: LOAD_USER})
    try {
        const result = await axios.post('/api/auth/login', user)
        dispatch({type: LOGIN_USER, payload: result.data})
        navigate('/profile')
    } catch (error) {
        dispatch({type: FAIL_USER, payload: error.response.data.errors})
    }
}

// Logout
export const logout = (navigate) => async (dispatch) => {
    dispatch({ type: LOGOUT_USER })
    navigate('/')
}

// current user
export const current = () => async (dispatch) => {
    dispatch({type: LOAD_USER})
    try {
        const config = {
            headers: {token: localStorage.getItem("token")}
        }
        let result = await axios.get("api/auth/current", config)
        dispatch({type: CURRENT_USER, payload: result.data})
    } catch (error) {
        dispatch({type: FAIL_USER, payload: error.response})
    }
}