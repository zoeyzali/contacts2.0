// import React from 'react'
import uuid from 'uuid/v1'

export const contactReducer = ( state, action ) => {
    switch ( action.type ) {
        case 'ADD_CONTACT':
            return [...state, {
                name: action.contact.name,
                phoneNr: action.contact.phoneNr,
                email: action.contact.email,
                id: uuid()
            }]
        case 'DELETE_CONTACT':
            return state.filter( contact => contact.id !== action.id )
        default:
            return state
    }
}

