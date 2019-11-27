import React from 'react'
import { Row } from 'react-materialize'
import SideNavMenu from './SideNavMenu'
// import { UserContext } from '../context/UserContext'
//{useContext}

export const Header = () => {
    const menuPaths = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Contacts",
            path: "/contacts"
        },
        {
            name: "Stuff",
            path: "/stuff"
        }
    ]

    // const { user } = useContext( UserContext )
    return (
        <div className="container-margin">
            <Row>

                <SideNavMenu paths={menuPaths} title="Menu" />

            </Row>
        </div>
    )
}