import React, { useContext, useState } from 'react'
import { ContactContext } from '../context/ContactContext'
import contactImg from '../images/yuna.jpg'
import { EditContactForm } from './EditContactForm'

export const ContactDetails = ( { contact } ) => {
    const { dispatch } = useContext( ContactContext )
    const [isEditing, setIsEditing] = useState( false )


    return (
        <>
            <div className="contact-details">
                <li key={contact.id} className="collection-item avatar  z-depth-1">
                    <img src={contactImg} alt="contact-avatar"
                        className="circle" />
                    <span className="contact-item">
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

                    <a href="#edit"
                        onClick={() => setIsEditing( isEditing => !isEditing )} className="secondary-content editBtn" style={{ marginRight: "1.5rem" }}>
                        <i className="material-icons">edit</i>
                    </a>
                </li>
                {isEditing && <div className="edit-modal">
                    <EditContactForm key={contact.id} contact={contact} isEditing={isEditing} setIsEditing={setIsEditing} />
                </div>
                }
            </div>
        </>
    )
}
