import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContactContext } from '../context/ContactContext'
import contactImg from '../images/yuna.jpg'

export const ContactsList = () => {
    const { contacts, deleteContact } = useContext( ContactContext )
    return <>
        <div className="contacts-list">
            <h2>Contacts List</h2>
            <div className="row">
                <ul className="collection">
                    {contacts.map( contact => {
                        return (
                            <li key={contact.id} className="collection-item avatar">
                                <img src={contactImg} alt="contact" className="circle" />
                                <span className="name">{contact.name}</span>
                                <p>{contact.phoneNr}<br />
                                    {contact.email}</p>

                                <a onClick={() => deleteContact( contact.id )} className="secondary-content deleteBtn">
                                    <i className="material-icons">delete</i>
                                </a>
                            </li>
                        )
                    } )}
                </ul>
                <div className="btn-container">
                    <Link to="/contacts/add" className="btn-floating btn-large waves-effect waves-light addBtn">
                        <i className=" material-icons">add</i>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

