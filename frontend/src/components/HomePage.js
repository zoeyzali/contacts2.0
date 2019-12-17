import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
// import Stuff from './Stuff'


export const HomePage = () => {
    const { user } = useContext( UserContext )
    // console.log( user, 'homeboi user' )


    // {!user && <Redirect to="/login" />}


    return <>
        <div className="home-page contacts-list">
            {user ? (
                <>
                    <h2>Home Page</h2>
                    Welcome
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </>
            ) : <div>
                    <h2>Welcome Guest</h2>
                    <div className="btn-container">
                        You can already add contacts!
                            <Link to="/contacts/add" className="btn-floating btn-large waves-effect waves-light addBtn">
                            <i className="material-icons">add</i>
                        </Link>
                    </div>
                </div>
            }
        </div>
    </>
}