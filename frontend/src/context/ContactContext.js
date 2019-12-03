import React, { createContext, useReducer, useEffect } from 'react'
import { contactReducer } from '../reducers/contactReducer'



export const ContactContext = createContext()

const ContactContextProvider = ( props ) => {
    const [contacts, dispatch] = useReducer( contactReducer, [],
        () => {
            const localData = localStorage.getItem( 'contacts' )
            return localData ? JSON.parse( localData ) : []
        } )

    useEffect( () => {
        localStorage.setItem( 'contacts', JSON.stringify( contacts ) )
        // contacts.map( contact => {
        //     console.log( contact, 'mapping contact' )
        //     return contact
        // } )
    }, [contacts] )


    return (
        <ContactContext.Provider value={{ contacts, dispatch }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider
