import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
import { ContactContext } from '../context/ContactContext'
import contactImg from '../images/yuna.jpg'

import { EditContact } from './EditContact'

export const ContactDetails = ( { contact } ) => {
    const { dispatch } = useContext( ContactContext )
    // console.log( contact.id, 'from details' )

    const [isEditing, setIsEditing] = useState( false )


    return (
        <>
            <div className="contact-details">
                <li className="collection-item avatar z-depth-4">
                    <img src={contactImg} alt="contact-avatar" className="circle" />
                    <span key={contact.id} className="contact">
                        {contact.name}
                    </span>
                    <p>
                        {contact.phoneNr}
                        <br />
                        {contact.email}
                    </p>
                    <button onClick={() => dispatch( { type: 'DELETE_CONTACT', id: contact.id } )} className="secondary-content deleteBtn">
                        <i className="material-icons">delete</i>
                    </button>
                    <a href="#edit" onClick={() => setIsEditing( isEditing => !isEditing )} className="secondary-content editBtn" style={{ marginRight: "1.5rem" }}>
                        <i className="material-icons">edit</i>
                    </a>
                </li>
            </div>

            {isEditing && <div className="edit-modal">
                <EditContact contact={contact} />
            </div>
            }
        </>
    )
}
