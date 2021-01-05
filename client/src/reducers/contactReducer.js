import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    CLEAR_CONTACT,
    DELETE_SELECTED_CONTACTS
} from '../actionTypes/actionTypes';

const initialState = {
    allContacts: [
        {
            "id": 1598404895011,
            "name": "Numan Ahmed",
            "number": "7001959252",
            "email": "mdnmnahmed@gmail.com",
            "address": "Kolkata, WB, INDIA 🇮🇳",
            "desc": "Full Stack JavaScript Developer",
        },
        {
            "id": 1598404930640,
            "name": "Saheb GuruG",
            "number": "8777073516",
            "email": "sahebmukherjee05@gmail.com",
            "address": "Barakpore, WB, INDIA 🇮🇳",
            "desc": "The Pro GuruG, Doctorate in Computer Science",
        },
        {
            "id": 1598404981295,
            "name": "Ujjwal GuruG",
            "number": "6290344863",
            "email": "ujjwal69@gmail.com",
            "address": "Motihari, Bihar, INDIA 🇮🇳",
            "desc": "The Pro Android Developer",
        },
        {
            "id": 1598405281295,
            "name": "Yogi Mishtri",
            "number": "8349277777",
            "email": "yogeshmishra69@gmail.com",
            "address": "Raipur, Chhattisgarh, INDIA 🇮🇳",
            "desc": "The Programmer BabaG",
        },
        {
            "id": 1598405397107,
            "name": "Ayush Das",
            "number": "9875310280",
            "email": "ayush.das91299@gmail.com",
            "address": "Delhi, INDIA 🇮🇳",
            "desc": "The Web Developer, and the most Confused 😕 character."
        },
        {
            "id": 1598406987325,
            "name": "Aswak Azrare",
            "number": "8610439448",
            "email": "aswak529@gmail.com",
            "address": "Chennai, TamilNadu, INDIA 🇮🇳",
            "desc": "The South Indian Hero"
        },
        {
            "id": 1598407029924,
            "name": "Arpan Das",
            "number": "9051798427",
            "email": "arpndas69@gmail.com",
            "address": "Barasat, WB, INDIA 🇮🇳",
            "desc": "The Bangali Hero"
        }
    ],
    contact: null,
    selectedContacts: []
}



export const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_CONTACT:
            return {
                ...state,
                allContacts: [payload, ...state.allContacts]
            }

        case GET_CONTACT:
            let arr = state.allContacts.filter((contact) => contact.id == payload);
            arr = arr.values();
            for (let val of arr) {
                arr = val;
            }
            return {
                ...state,
                contact: arr
            }

        case UPDATE_CONTACT:
            return {
                ...state,
                allContacts: state.allContacts.map((contact) =>
                    contact.id == payload.id ? payload : contact
                ),
            }

        case DELETE_CONTACT:
            return {
                ...state,
                allContacts: state.allContacts.filter((contact) => contact.id !== payload)
            }

        case SELECT_CONTACT:
            return {
                ...state,
                selectedContacts: payload
            }

        case CLEAR_CONTACT:
            return {
                ...state,
                selectedContacts: []
            }

        case DELETE_SELECTED_CONTACTS:
            return {
                ...state,
                allContacts: []
            }


        default:
            return state;
    }
}