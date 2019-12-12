import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ( props ) => {
    const [user, setUser] = useState( {
        // name: "Zoe Bowie",
        // email: "zoeecoding@gmail.com",
        // phoneNr: "072-978 00 00",
        // id: 1
    } )


    useEffect( () => {
        localStorage.setItem( 'user', JSON.stringify( user ) )
    }, [user] )

    const keepAuthUser = ( user ) => {
        console.log( user, 'the user' )
        setUser( user )
    }

    return (
        <UserContext.Provider value={{ user, keepAuthUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

