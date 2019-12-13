import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'

const Logout = () => {
    const { user, destroyAuthUser } = useContext( UserContext )

    const handleLogout = async () => {
        const response = await fetch( "/users/logout", {
            method: 'GET',
            credentials: 'include',
        } )
        if ( response ) {
            console.log( response, 'oh noes response' )
        }
        if ( response.status === 200 ) {
            destroyAuthUser()
        }
    }

    return (
        <>
            {user && (
                <Link to="#"
                    className="flatBtns z-depth-2"
                    onClick={handleLogout}
                >
                    <i className="material-icons auth-icons"
                        style={{
                            color: "#03a9f4",
                            verticalAlign: "middle",
                            // marginBottom: "0.2rem",
                            // marginTop: "0.3rem",
                            fontSize: "1.6rem"
                        }}>logout</i>
                    SIGN OUT
      </Link>
            )}
        </>
    )
}

export default Logout;
