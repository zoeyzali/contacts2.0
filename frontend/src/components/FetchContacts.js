import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

const FetchContacts = () => {
    const { user } = useContext( UserContext )
    const [data, setData] = useState( [] )
    const [error, setError] = useState( false )

    useEffect( () => {
        let mounted = true
        const getUserContacts = async () => {
            try {
                let userId = user._id
                const response = await fetch( `users/${userId}/contacts` )
                if ( mounted ) {
                    const result = { res: await response.json(), status: response.status }
                    if ( result.status === 200 ) {
                        // console.log( result.res.user.contacts, 'responde from fetch' )
                        let contactsData = result.res.user.contacts
                        console.log( contactsData, 'mapped data' )
                        setData( [...contactsData] )
                    } else {
                        if ( result.status === 400 )
                            setError( true )
                        console.log( result.status, 'Oh noes' )
                    }
                }
            } catch ( error ) {
                console.log( error )
            }
        }
        getUserContacts()

        return () => {
            setError( false )
            mounted = false
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setData] )

    return (
        <>
            <div className="container db-contacts">
                {error && <div className="error-danger" style={{ color: "crimson" }}>
                    <span>Please Login</span>
                </div>
                }

                <ul className="collection">
                    {data.length ?
                        data.map( contact => {
                            return <li key={contact._id} className="collection-item avatar z-depth-1">
                                <span className="contact-item">
                                    {contact.name}
                                </span>
                                <p>
                                    {contact.phone}
                                    <br />
                                    {contact.email}
                                </p>
                            </li>
                        } )
                        :
                        <h4>Oh noes! no contacts</h4>
                    }
                </ul>
            </div>
        </>
    )
}

export default FetchContacts
