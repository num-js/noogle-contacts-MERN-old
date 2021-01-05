import {
    CREATE_CONTACT,
    GET_CONTACT, 
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    CLEAR_CONTACT,
    DELETE_SELECTED_CONTACTS
} from '../actionTypes/actionTypes';

// Add Contact Action
export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact
    }
}

// Get Contact Action
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
});

// Update Contact Action
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
});

//Delete Contact Action
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
})

//Select All Contacts
export const selectAllContacts = (id) => ({
    type: SELECT_CONTACT,
    payload: id
})

// Clear Selected Contacts
export const clearAllSelectedContacts = () => ({
    type: CLEAR_CONTACT
})

// DELETE_SELECTED_CONTACTS Action
export const deleteSelectedContact = (payload) => ({
    type: DELETE_SELECTED_CONTACTS
})
