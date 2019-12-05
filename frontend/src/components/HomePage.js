import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
// import Stuff from './Stuff'


export const HomePage = () => {
    const { user } = useContext( UserContext )
    // const [inputValue, setValue] = useState( "reactjs" )
    // const [subreddit, setSubreddit] = useState( inputValue )

    // const handleSubmit = ( e ) => {
    //     e.preventDefault()
    //     setSubreddit( inputValue )
    // }

    return <>
        {user &&
            <div className="home-page">
                <h2>Home Page</h2>
                Welcome
                <h4>{user.name}</h4>

                { /* 
                    Testing fetchData wiith useEffect 
                    <div className="container">
                    <form onSubmit={handleSubmit} className="input-field col s6">
                    <input
                    type ="text"
                    className="input-field col s6"
                    value={inputValue}
                    onChange={e => setValue( e.target.value )}
                    />
                    </form>
                    <Stuff subreddit={subreddit} />
                    </div>
                    */}
            </div>}
    </>
}