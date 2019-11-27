import React, { useState, useContext } from 'react'
import { Button } from 'react-materialize'
import { ContactContext } from '../context/ContactContext'

export const NewContactForm = () => {
    const { dispatch } = useContext( ContactContext )
    const [name, setName] = useState( '' )
    const [phoneNr, setPhoneNr] = useState( '' )
    const [email, setEmail] = useState( '' )

    const handleSubmit = ( e ) => {
        e.preventDefault()
        dispatch( {
            type: 'ADD_CONTACT', contact: {
                name,
                phoneNr,
                email
            }
        } )
        setName( '' )
        setPhoneNr( '' )
        setEmail( '' )
    }
    return (
        <>
            <div className="row">
                <h3>Add Contact</h3>
                <div className="col s12">
                    <form onSubmit={handleSubmit} className="container contact-form center-align">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="validate"
                                    value={name}
                                    onChange={( e ) => setName( e.target.value )}
                                    required
                                />
                                <label htmlFor="name" hidden>Name</label>
                            </div>

                            <div className="input-field col s6">
                                <input
                                    id="phoneNr"
                                    type="text"
                                    placeholder="072-978 69 69"
                                    className="validate"
                                    value={phoneNr}
                                    onChange={( e ) => setPhoneNr( e.target.value )}
                                    required
                                />
                                <label htmlFor="phoneNr" hidden>PhoneNumber</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="jane@idk.com"
                                    className="validate"
                                    value={email}
                                    onChange={( e ) => setEmail( e.target.value )}
                                    required
                                />
                                <label htmlFor="email" hidden>Email</label>
                            </div>
                        </div>
                        <Button
                            flat={true}
                            type="submit"
                            value="Add contact"
                            className="btn waves-effect waves-light">
                            Add Contact
                    </Button>
                    </form>
                </div>
            </div>
        </>
    )
}