import React from 'react'
import { Row } from 'react-materialize'
import SideNavMenu from './SideNavMenu'


export const Header = () => {
    const menuPaths = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Contacts",
            path: "/contacts/"
        },
        {
            name: "Add Contact",
            path: "/contacts/add"
        },
        {
            name: "& Stuff",
            path: "/user-contacts"
        }
    ]

    return (
        <Row>
            <SideNavMenu paths={menuPaths} title="Menu"
                style={{ color: "#03a9f4" }} />
        </Row>
    )
}