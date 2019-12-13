import React, { useContext, useState } from 'react'
import { ContactContext } from '../context/ContactContext'
import { Button } from 'react-materialize'


export const EditContactForm = ( { contact, isEditing, setIsEditing } ) => {
    const { dispatch } = useContext( ContactContext )

    const [currentContact, setCurrentContact] = useState( contact )


    const handleUpdate = ( e ) => {
        e.persist()
        setIsEditing( true )

        setCurrentContact( currentContact => ( {
            ...currentContact,
            [e.target.name]: e.target.value
        } ) )
        // console.log( 'updating field', e.target.name )
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
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col s12" style={{
                        marginBottom: "0.8rem"
                    }}>
                        <h3>Edit Contact</h3>
                        <form className="contact-form">
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
                            >Save</Button>
                            }
                            <button onClick={() => setIsEditing( isEditing => !isEditing )}
                                className="cancel-btn waves-light btn-flat">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

