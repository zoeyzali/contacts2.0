import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

const AuthContext = ( props ) => {
    const { keepAuthUser } = useContext( UserContext )
    const [authUser, setAuthUser] = useState( false )
    const [isLoading, setIsLoading] = useState( false )

    const checkForLogin = async () => {
        const response = await fetch( '/users/login' ).catch( err => console.log( err, 'authContextKeeperErr' ) )
        const result = {
            res: await response.json(),
            status: response.status
        }
        if ( result.res ) {
            keepAuthUser( result.res )
            setAuthUser( true )
        }
        setIsLoading( false )
    }
    if ( !authUser ) {
        checkForLogin()
    }


    if ( isLoading ) {
        return <div className="progress" style={{
            margin: "16rem 0.5rem  1rem  0.5rem",
            width: "100%", backgroundColor: "orange"
        }}>
            <div className="indeterminate" style={{
                backgroundColor: "#03a9f4",
            }} ></div>
        </div>
    }


    return (
        <div className="">
            {props.children}
        </div>
    )
}

export default AuthContext
