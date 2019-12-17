import React, { useContext } from 'react'
// import { UserContext } from '../context/UserContext'
import FetchContacts from './FetchContacts'



const Stuff = () => {
    // const { user } = useContext( UserContext )
    // {user ?
    //     <div className="stuff-page">
    //         <h2> & Other Contacts</h2>
    //         <FetchContacts />
    //     </div>
    //     :
    //     <h4>No results found</h4>}

    return <>
        <div className="stuff-page">
            <h2>DB Contacts</h2>
            <FetchContacts />
        </div>
    </>
}

export default Stuff
