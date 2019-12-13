import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

const AuthContext = ( props ) => {
    const { keepAuthUser } = useContext( UserContext )
    const [authUser, setAuthUser] = useState( false )
    // const [isLoading, setIsLoading] = useState( false )


    const checkLogin = async () => {
        const response = await fetch( '/users/login' ).catch( err => console.log( err, ' authContextKeeper' ) )
        const result = {
            res: await response.json(),
            status: response.status
        }
        if ( result.res ) {
            // console.log( 'auth from Auth', result.res )
            keepAuthUser( result.res )
            setAuthUser( true )
        }
        // setIsLoading( false )
    }

    if ( !authUser ) {
        checkLogin()
    }




    return (
        <div className="">
            {props.children}
        </div>
    )
}

export default AuthContext
