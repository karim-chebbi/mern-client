import { ADD_CONTACT, FAIL_CONTACT, LOAD_CONTACT, ONE_CONTACT, SUCCESS_CONTACT } from "../ActionTypes/ActionTypes"
import axios from 'axios'


// get contacts
export const getContacts = () => async (dispatch) => {
    dispatch({type: LOAD_CONTACT})
    try {
        const contacts = await axios.get('/api/contacts/getContacts')
        dispatch({type: SUCCESS_CONTACT, payload: contacts.data})
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error})
    }
}

// get contact by id
export const getOneContact = (id) => async (dispatch) => {
    dispatch({type: LOAD_CONTACT})
    try {
        const contact = await axios.get(`/api/contacts/getContactById/${id}`)
        dispatch({type: ONE_CONTACT, payload: contact.data})
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error})
    }
}

// get contact user id
export const getyContacts = (id) => async (dispatch) => {
    dispatch({type: LOAD_CONTACT})
    try {
        const contact = await axios.get(`/api/contacts/getByUserId/${id}`)
        dispatch({type: ONE_CONTACT, payload: contact.data})
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error})
    }
}



// add new contact
export const addContact = (newContact, navigate) => async (dispatch) => {
    try {
        const config = {
            headers: {token: localStorage.getItem("token")}
        }
        const result = await axios.post(`/api/contacts/add_contact`, newContact, config)
        await dispatch({type: ADD_CONTACT, payload: result.data})
        dispatch(getContacts())
        navigate('/contacts')
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error.response.data.errors})
    }
}


// delete contact
export const deleteContact = (id) => async (dispatch) => {
    try {
        const result = await axios.delete(`/api/contacts/deleteContact/${id}`)
        dispatch({type: SUCCESS_CONTACT, payload: result.data})
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error})
    }
}

// edit contact
export const editContact = (id, newContact) => async (dispatch) => {
    try {
        const result = await axios.put(`/api/contacts/editContact/${id}`, newContact)
        dispatch({type: SUCCESS_CONTACT, payload: result.data})
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error})
    }
}