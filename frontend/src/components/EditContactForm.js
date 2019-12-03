import React, { useContext, useState } from 'react'
import { ContactContext } from '../context/ContactContext'
import { Button } from 'react-materialize'


export const EditContactForm = ( { contact, isEditing, setIsEditing } ) => {
    const { dispatch } = useContext( ContactContext )

    const [currentContact, setCurrentContact] = useState( contact )
    // const [updatedInputs, setUpdatedInputs] = useState( {} )


    const handleUpdate = ( e ) => {
        e.persist()
        setIsEditing( true )
        // setUpdatedInputs( updatedInputs => ( {
        //     ...updatedInputs,
        //     [e.target.name]: e.target.value
        // } ) )
        setCurrentContact( currentContact => ( {
            ...currentContact,
            [e.target.name]: e.target.value
        } ) )
        console.log( e.target.name, 'updated field' )
    }


    const editContact = ( e ) => {
        e.preventDefault()
        dispatch( {
            type: 'EDIT_CONTACT',
            contact: {
                // ...contact,
                ...currentContact,
                // name: currentContact.name,
                // phoneNr: currentContact.phoneNr,
                // email: currentContact.email,
                // id: currentContact.id
            }
        } )
        setIsEditing( false )
        console.log( { currentContact }, currentContact, 'event and OBJ' )
        // setCurrentContact( { currentContact } )
        // setUpdatedInputs( currentContact => ( {
        //     ...currentContact, ...updatedInputs,
        // } ) )
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
                        // onClick={() => dispatch( { type: 'EDIT_CONTACT', id: contact.id } )}
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

