import axios from 'axios'
import { ERROR_GET_USER, LOAD_GET_USER, SUCCESS_GET_USER } from '../ActionTypes/ActionTypes'


// get users
export const getUsers = () => async (dispatch) => {
    dispatch({type: LOAD_GET_USER})
    try {
        const users = await axios.get('/api/auth/getUsers')
        dispatch({type: SUCCESS_GET_USER, payload: users.data})
    } catch (error) {
        dispatch({type: ERROR_GET_USER, payload: error})
    }
}

// get user by id
export const getOneUser = (id) => async (dispatch) => {
    dispatch({type: LOAD_GET_USER})
    try {
        const user = await axios.get(`/api/auth/getOneUser`, { params: { _id: id } } )
        dispatch({type: SUCCESS_GET_USER, payload: user.data})
    } catch (error) {
        dispatch({type: ERROR_GET_USER, payload: error})
    }
}
