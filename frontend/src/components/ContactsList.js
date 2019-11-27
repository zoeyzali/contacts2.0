import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContactContext } from '../context/ContactContext'
import { ContactDetails } from './ContactDetails'

const ContactsList = () => {
    const { contacts } = useContext( ContactContext )
    return <div className="contacts-list">
        {contacts.length ? (
            <div className="row">
                <h2>Contacts List</h2>
                <ul className="collection">
                    {contacts.map( contact => {
                        return ( <ContactDetails contact={contact}
                            key={contact.id} /> )
                    } )}
                </ul>
            </div>
        ) : (
                <div className="empty">
                    <h2>No Contacts</h2>
                    <div className="btn-container">
                        <Link to="/contacts/add" className="btn-floating btn-large waves-effect waves-light addBtn">
                            <i className="material-icons">add</i>
                        </Link>
                    </div>
                </div>
            )
        }
    </div>
}

export default ContactsList