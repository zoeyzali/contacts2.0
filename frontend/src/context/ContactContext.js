import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid/v1'


export const ContactContext = createContext()

const ContactContextProvider = ( props ) => {
    const [contacts, setContacts] = useState( [
        // { name: "Maria Babe", phoneNr: "+45 69 69 69", email: "maria<3@gmail.com", id: 0 },
        // { name: "Ivar Ivarsson", phoneNr: "+45 283748", email: "ivar@gmail.com", id: 1 },
        // { name: "Pow Pow", phoneNr: "0800 420 420", email: "powpow@gmail.com", id: 2 }
    ], () => {
        const contactData = localStorage.getItem( 'contacts' )
        // console.log( contactData, contacts, 'parsing' )
        return contactData ? JSON.parse( contactData ) : []
    } )

    useEffect( () => {
        localStorage.setItem( 'contacts', JSON.stringify( contacts ) )
    }, [contacts] )


    const addContact = ( name, phoneNr, email ) => {
        setContacts( [...contacts, { name, phoneNr, email, id: uuid() }] )
        // console.log( contacts, 'from list' )
    }

    const deleteContact = ( id ) => {
        setContacts( contacts.filter( contact => contact.id !== id ) )
    }


    return (
        <ContactContext.Provider value={{ contacts, addContact, deleteContact }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider
