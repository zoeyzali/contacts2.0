import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import useNavHooks from './useNavHooks'
import { Button } from 'react-materialize'



export default function SideNavMenu( props ) {
    const [slider, setSlider] = useState( false )
    const size = useNavHooks()
    const { user, destroyAuthUser } = useContext( UserContext )
    // const user = props.user

    const handleLogout = async () => {
        const response = await fetch( "http://localhost:5000/users/logout" )
        console.log( response, 'logout' )
        if ( response.status === 200 ) {
            destroyAuthUser()
        }
    }

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
                    <Link to="/contacts" className="user-info"
                        style={{
                            backgroundColor: "#03a9f4",
                            color: "#fff",
                            height: "54px"
                        }}>
                        <i className="material-icons"
                            style={{
                                color: "#fff"
                            }}>account_box
                        </i>
                        Logged in as {user.name}
                    </Link>
                </li>

                {props.paths.map( ( url, index ) => (
                    <li key={index}
                        onClick={() => setSlider( s => !s )}>
                        <Link className="waves-effect"
                            to={url.path}
                            style={{
                                color: "#343434",
                                textTransform: "uppercase",
                                fontSize: "1rem",
                                paddingTop: "0.8rem",
                                fontWeight: "400"
                            }}>
                            {url.name}
                        </Link>
                    </li>
                ) )}
                <li>
                    <div className="divider" />
                </li>
                <li>
                    {user && (
                        <Button
                            flat={true}
                            className="logout-btn flatBtns"
                            onClick={handleLogout}>
                            <i className="material-icons">logout</i>
                            Sign out
                        </Button>
                    )}
                    <Link to="/login"
                        className="login-link">
                        <i className="material-icons" style={{
                            color: "#03a9f4",
                            verticalAlign: "middle",
                            marginBottom: "0.2rem",
                            fontSize: "1.5rem"
                        }}>account_circle</i>
                        Sign In
                    </Link>
                </li>
            </ul>
        </>
    )
}
