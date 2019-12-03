import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const HomePage = () => {
    const { user } = useContext( UserContext )
    return <>
        {user &&
            <div className="home-page">
                <h2>Home Page</h2>
                Welcome <h4>{user.name}</h4>
            </div>
        }

    </>

}