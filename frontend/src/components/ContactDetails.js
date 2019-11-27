import React, { useContext } from 'react'
import { ContactContext } from '../context/ContactContext'
import contactImg from '../images/yuna.jpg'


export const ContactDetails = ( { contact } ) => {
    const { dispatch } = useContext( ContactContext )
    return (
        <div className="contact-details">
            <li className="collection-item avatar z-depth-3">
                <img src={contactImg} alt="contact-avatar" className="circle" />
                <span className="contact">
                    {contact.name}
                </span>
                <p>{contact.phoneNr}
                    <br />
                    {contact.email}</p>
                <button onClick={() => dispatch( { type: 'DELETE_CONTACT', id: contact.id } )} className="secondary-content deleteBtn">
                    <i className="material-icons">delete</i>
                </button>
            </li>
        </div>
    )
}
