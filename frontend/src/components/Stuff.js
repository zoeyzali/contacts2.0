import React, { useEffect, useState } from 'react'

const Stuff = ( { subreddit } ) => {
    const [posts, setPosts] = useState( [] )
    useEffect( () => {
        //https://www.reddit.com/r/${subreddit}.json
        const fetchData = async () => {
            const res = await fetch( ` http://localhost:5000/users/5dea787ec9671cfba72c0050/contacts` )
            const json = await res.json()
            console.log( json, 'user\'s contacts' )
            // setPosts( json.data.children.map( c => c.data ) )
            // console.log( json.data.children, 'reddit posts' )
        }
        fetchData()
        // console.log( posts, 'useeffect running' )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subreddit, setPosts] )

    return <>
        <div className="stuff-page">
            <h2> & Other Stuff</h2>
            <ul>{posts.map( post => (
                <li key={post.id}>{post.title}</li>
            ) )}
            </ul>
        </div>
    </>
}

export default Stuff;
