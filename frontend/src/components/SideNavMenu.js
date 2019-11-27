import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import useNavHooks from './useNavHooks'
import { Button } from 'react-materialize'



export default function SideNavMenu( props ) {
    const [slider, setSlider] = useState( false )
    const size = useNavHooks()
    const { user } = useContext( UserContext )

    return (
        <>
            <nav className="light-blue nav-header">
                <Link to="#" className="sidenav-trigger" onClick={() => setSlider( s => !s )}>
                    <i className="material-icons">menu</i>
                </Link>
                <Link to="/" className="logo-brand">
                    <i className="material-icons" style={{ color: "white" }}>phone</i></Link>
            </nav>
            <div className="sidenav-overlay" onClick={() => setSlider( s => !s )}
                style={{
                    display: slider && size.width < 980 ? "block" : "none",
                    opacity: "1"
                }}
            />

            <ul
                id="slide-out"
                className="sidenav"
                style={{
                    transform: slider || size.width > 980 ? "translateX(0%)" : "",
                    transitionProperty: "transform",
                    transitionDuration: ".25s",
                    width: "80%"
                }}
            >
                <li>
                    <Link className="user-info" to="/"
                        style={{
                            backgroundColor: "#03a9f4",
                            color: "#fff", paddingTop: "0.2rem"
                        }}>
                        Logged in as {user.name}
                    </Link>
                </li>
                {props.paths.map( ( url, index ) => (
                    <li key={index} onClick={() => setSlider( s => !s )}>
                        <Link className="waves-effect" to={url.path} >
                            {url.name}
                        </Link>
                    </li>
                ) )}
                <li>
                    <div className="divider" />
                </li>
                <li>
                    <Button
                        flat={true}
                        className="logout-btn">
                        Sign out <i className="material-icons">logout</i></Button>
                </li>
            </ul>
        </>
    )
}
