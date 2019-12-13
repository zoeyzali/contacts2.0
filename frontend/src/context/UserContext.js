import React, { createContext, useState } from 'react'


// localstorage user useEffect
//     () => {
//         const localData = localStorage.getItem( 'user' )
//         return localData ? JSON.parse( localData ) : {}
//     } )

// useEffect( () => {
//     localStorage.setItem( 'user', JSON.stringify( user ) )
// }, [user] )


export const UserContext = createContext()

const UserContextProvider = ( props ) => {
    const [user, setUser] = useState( "" )


    const keepAuthUser = ( user ) => {
        setUser( user )
    }

    const destroyAuthUser = () => {
        setUser( "" )
    }



    return (
        <UserContext.Provider value={{ user, keepAuthUser: keepAuthUser, destroyAuthUser: destroyAuthUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider