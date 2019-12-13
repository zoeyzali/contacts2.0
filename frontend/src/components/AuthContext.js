import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

const AuthContext = ( props ) => {
    const { keepAuthUser } = useContext( UserContext )
    const [authUser, setAuthUser] = useState( false )
    const [isLoading, setIsLoading] = useState( false )


    const checkLogin = async () => {
        const response = await fetch( '/users/login' ).catch( err => console.log( err, ' authContextKeeper' ) )
        const result = {
            res: await response.json(),
            status: response.status
        }
        if ( result.res ) {
            console.log( 'auth from Auth', result.res )
            keepAuthUser( result.res )
            setAuthUser( true )
        }
        setIsLoading( false )
    }

    if ( !authUser ) {
        checkLogin()
    }

    if ( isLoading ) {

        return (
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="">
            {props.children}
        </div>
    )
}

export default AuthContext
