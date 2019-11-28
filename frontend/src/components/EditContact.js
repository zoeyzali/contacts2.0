import React, { useContext, useState } from 'react'
import { ContactContext } from '../context/ContactContext'
import { Button } from 'react-materialize'

export const EditContact = ( { contact } ) => {
    const { dispatch } = useContext( ContactContext )
    let initialFormState = {}
    if ( contact ) {
        // console.log( contact.name, 'initial state' )
        initialFormState = {
            name: contact.name,
            phoneNr: contact.phoneNr,
            email: contact.email,
            id: contact.id,
        }
    }
    const [currentContact, setCurrentContact] = useState( initialFormState )
    // console.log( currentContact, 'current' )
    // console.log( contact.email, 'contact' )


    const handleUpdate = ( e ) => {
        e.persist();
        setCurrentContact( currentContact => ( {
            ...currentContact,
            [e.target.name]: e.target.value
        } ) )
        console.log( currentContact.name )
        console.log( e.target.value )
    }

    const editContact = ( e ) => {
        e.preventDefault();
        console.log( e, 'yao brap' )
        dispatch( {
            type: 'EDIT_CONTACT',
            contact: {
                name: currentContact.name,
                phoneNr: currentContact.phoneNr,
                email: currentContact.email,
                id: currentContact.id
            }
        } )
    }

    return (
        <>
            <div className="row">
                <h3>Edit</h3>
                <div className="col s12">
                    <form className="container contact-form center-align">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="validate"
                                    value={currentContact.name}
                                    onChange={handleUpdate}
                                    required
                                />
                                <label htmlFor="name" hidden>Name</label>
                            </div>

                            <div className="input-field col s6">
                                <input
                                    name="phoneNr"
                                    type="text"
                                    placeholder="072-978 69 69"
                                    className="validate"
                                    value={currentContact.phoneNr}
                                    onChange={handleUpdate}
                                    required
                                />
                                <label htmlFor="phoneNr" hidden>PhoneNumber</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="jane@idk.com"
                                    className="validate"
                                    value={currentContact.email}
                                    // onChange={( e ) => setCurrentContact( e.target.value )}
                                    onChange={handleUpdate}
                                    required
                                />
                                <label htmlFor="email" hidden>Email</label>
                            </div>
                        </div>
                        <Button
                            flat={true}
                            type="submit"
                            className="btn waves-effect waves-light" value="edit contact"
                            onClick={editContact}
                        >
                            EDIT
                              </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

