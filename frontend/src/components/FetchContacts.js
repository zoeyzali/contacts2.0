import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Redirect } from 'react-router-dom'

const FetchContacts = () => {
    const { user } = useContext( UserContext )
    const [data, setData] = useState( [] )
    const [error, setError] = useState( false )

    useEffect( () => {
        let mounted = true
        const getUserContacts = async () => {
            try {
                let userId = user._id
                // console.log( userId, 'ID' )
                const response = await fetch( `http://localhost:5000/users/${userId}/contacts` )
                // if ( response ) {
                //     const result = { res: await response.json(), status: response.status }
                //     console.log( result, 'result from fetch' )
                // }
                const result = await response.json()
                if ( mounted ) {
                    if ( result.status === 200 ) {
                        console.log( result.status, 'wihoo' )
                        setData( [...result] )
                    } else {
                        console.log( result.status === 400, 'Oh noes' )
                    }
                }
            } catch ( error ) {
                console.log( error )
            }
        }

        getUserContacts()
        return () => {
            // setError( false )
            mounted = false
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <>
            {!user && <Redirect to="/login" />}
            <div>
                {error &&
                    <div className="error-danger"
                        style={{ color: "crimson" }}>
                        Please Login
            </div>
                }
                {data.length ?
                    <>
                        <ul>
                            {data.map( contact => {
                                console.log( data, contact, 'data and contact' )
                                return <li key={contact._id}>{contact.name}
                                </li>
                            }
                            )}
                        </ul>
                    </>
                    :
                    <>
                        <h4>...No contacts?</h4>
                    </>
                }
            </div>
        </>
    )
}

export default FetchContacts
