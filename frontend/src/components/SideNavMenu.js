import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import useNavHooks from './useNavHooks'
import Logout from './Logout'



export default function SideNavMenu( props ) {
    const [slider, setSlider] = useState( false )
    const size = useNavHooks()
    const { user } = useContext( UserContext )



    return (
        <>
            <nav className="light-blue nav-header">
                <Link to="#" className="sidenav-trigger"
                    onClick={() => setSlider( s => !s )}>
                    <i className="material-icons">menu</i>
                </Link>

                <Link to="/contacts" className="logo-brand">
                    <i className="material-icons"
                        style={{ color: "white" }}>phone</i>
                </Link>
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
                    // width: "60%"
                }}
            >
                <li>
                    <Link to="/contacts" className="user-info" style={{
                        backgroundColor: "#03a9f4",
                        color: "#fff",
                        height: "54px"
                    }}>
                        <i className="material-icons auth-icons" style={{
                            color: "#fff"
                        }}>account_box</i>

                        {user ? (
                            `Logged in as ${user.name}`
                        ) : "No Active User"}
                    </Link>
                </li>

                {props.paths.map( ( url, index ) => (
                    <li key={index} onClick={() => setSlider( s => !s )}>
                        <Link className="waves-effect waves-light" to={url.path} style={{
                            color: "#343434",
                            textTransform: "uppercase",
                            fontSize: "1rem",
                            fontWeight: "400"
                        }}>
                            {url.name}
                        </Link>
                    </li>
                ) )}

                <li>
                    <div className="divider z-depth-5" />
                </li>
                <li>
                    {!user ? <Link to="/login"
                        className="flatBtns z-depth-2">
                        <i className="material-icons auth-icons"
                            style={{
                                color: "#03a9f4",
                                verticalAlign: "middle",
                                fontSize: "1.6rem"
                            }}>account_circle</i>
                        SIGN IN
                    </Link>
                        :
                        <Logout />
                    }
                </li>
            </ul>
        </>
    )
}
