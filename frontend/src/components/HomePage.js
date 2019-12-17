import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Redirect } from 'react-router-dom'
// import Stuff from './Stuff'


export const HomePage = () => {
    const { user } = useContext( UserContext )
    console.log( user, 'homeboi user' )

    // const [inputValue, setValue] = useState( "reactjs" )
    // const [subreddit, setSubreddit] = useState( inputValue )

    // const handleSubmit = ( e ) => {
    //     e.preventDefault()
    //     setSubreddit( inputValue )
    // }

    return <>
        // {!user && <Redirect to="/login" />}
        <div className="home-page">
            <h2>Home Page</h2>
            Welcome
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.phone}</p>


            { /*    
            Testing fetchData wiith useEffect
                    <div className="container">
                <form onSubmit={handleSubmit} className="input-field col s6">
                    <input
                        type="text"
                        className="input-field col s6"
                        value={inputValue}
                        onChange={e => setValue( e.target.value )}
                    />
                </form>
                <Stuff subreddit={subreddit} />
            </div> */}

        </div>
    </>
}