import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid footer-container">
            <div className="footer">
                <p className="footer-text">&copy; {new Date().getFullYear().toString()}, By zoeecoding | https://zoeali.se</p>
            </div>

        </div>
    )
}

export default Footer
