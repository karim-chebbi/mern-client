import { ADD_CONTACT, FAIL_CONTACT, GET_MY_CONTACTS, LOAD_CONTACT, ONE_CONTACT, SUCCESS_CONTACT } from "../ActionTypes/ActionTypes"


// initialState
const initialState = {
    load: false,
    success: null,
    fail: null,
    listContacts: [],
    oneContact: {},
    addedBy: '',
    myContacts: []
}

// reducer function
const contactReducer = (state=initialState, {type, payload}) => {
    switch (type) {
    
    case LOAD_CONTACT:
        return {...state, load: true}

    case SUCCESS_CONTACT:
        return {...state, load: false, listContacts: payload }

    case ADD_CONTACT:
        return {...state, load: false, addedBy: payload.user.name}

    case FAIL_CONTACT:
        return {...state, load: false, fail: payload}
    
    case ONE_CONTACT:
        return {...state, oneContact: payload, load: false}

    case GET_MY_CONTACTS:
        return {...state, }
 
        default:
            return state
    }
}

// export
export default contactReducer