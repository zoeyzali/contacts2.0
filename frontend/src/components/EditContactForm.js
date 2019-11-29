import React, { useContext, useState, useEffect } from 'react'
import { ContactContext } from '../context/ContactContext'
import { Button } from 'react-materialize'


export const EditContactForm = ( { contact, isEditing, setIsEditing } ) => {
    console.log( contact, 'just the contact object' )

    const { contacts, dispatch } = useContext( ContactContext )
    let initialEditState = {}
    if ( contact ) {
        initialEditState = {
            name: contact.name,
            phoneNr: contact.phoneNr,
            email: contact.email,
            id: contact.id,
        }
    }

    const [currentContact, setCurrentContact] = useState( initialEditState )

    const handleUpdate = ( e ) => {
        setIsEditing( true )
        console.log( contact.id, 'the id of..' )
        e.persist()
        setCurrentContact( initialEditState => ( {
            ...initialEditState,
            [e.target.name]: e.target.value
        } ) )
    }


    const editContact = ( e ) => {
        e.preventDefault()
        dispatch( {
            type: 'EDIT_CONTACT',
            contact: {
                name: currentContact.name,
                phoneNr: currentContact.phoneNr,
                email: currentContact.email,
            }
        } )
        setIsEditing( false )
        setCurrentContact( currentContact )
        // console.log( currentContact, 'current' )
    }



    return (
        <>
            <div className="row">
                <h3>Editing</h3>
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

                        {isEditing && <Button
                            flat={true}
                            type="submit"
                            className="btn waves-effect waves-light" value="edit contact"
                            onClick={editContact}
                        >
                            Save
                              </Button>
                        }
                        <button onClick={() => setIsEditing( isEditing => !isEditing )} className="cancel-btn waves-light">Cancel</button>
                    </form>
                </div>
            </div>
        </>
    )
}

