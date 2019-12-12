import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

const UserContextProvider = ( props ) => {
    const [user, setUser] = useState( {},
        () => {
            const localData = localStorage.getItem( 'user' )
            return localData ? JSON.parse( localData ) : {}
        } )

    useEffect( () => {
        localStorage.setItem( 'user', JSON.stringify( user ) )
    }, [user] )

    const keepAuthUser = ( user ) => {
        setUser( user )
    }

    const destroyAuthUser = () => {
        localStorage.clear()
        setUser( "" )
    }

    return (
        <UserContext.Provider value={{ user, keepAuthUser: keepAuthUser, destroyAuthUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider