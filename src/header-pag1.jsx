import React from 'react'
import './header-pag1.css'

export function HeaderPag1({home, about, services, contact}) {
    return ( 
        <header className="header-pag1">
            <div className="logo">
                <img src="./src/assets/logo.png" alt="Logo" />
            </div>
            <nav className="nav-links">
                <a href="#home">{home}</a>
                <a href="#about">{about}</a>
                <a href="#services">{services}</a>
                <a href="#contact">{contact}</a>
            </nav>
        </header>
    )
}