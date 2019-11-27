import React, { useState, useContext } from 'react'
import { Button } from 'react-materialize'
import { ContactContext } from '../context/ContactContext'

export const NewContactForm = () => {
    const { addContact } = useContext( ContactContext )
    const [name, setName] = useState( '' )
    const [phoneNr, setPhoneNr] = useState( '' )
    const [email, setEmail] = useState( '' )

    const handleSubmit = ( e ) => {
        e.preventDefault()
        addContact( name, phoneNr, email )
        setName( '' )
        setPhoneNr( '' )
        setEmail( '' )
        console.log( name, email, phoneNr, 'input loggin' )
    }

    return (
        <>
            <div className="row contact-form">
                <h3>Add Contact</h3>
                <form onSubmit={handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="name"
                                type="text"
                                placeholder="Henry Lee"
                                className="validate"
                                value={name}
                                onChange={( e ) => setName( e.target.value )}
                            />
                            <label htmlFor="name" hidden>Name</label>
                        </div>

                        <div className="input-field col s6">
                            <input
                                id="phoneNr"
                                type="text"
                                placeholder="072 978 69 69"
                                className="validate"
                                value={phoneNr}
                                onChange={( e ) => setPhoneNr( e.target.value )}
                            />
                            <label htmlFor="phoneNr" hidden>PhoneNumber</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="email"
                                type="email"
                                placeholder="henrylee@idk.com"
                                className="validate"
                                value={email}
                                onChange={( e ) => setEmail( e.target.value )}
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
        </>
    )
}