import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-danger navbar-danger">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">AYOUB ROUIZI</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/Home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Add-task">Add task</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            </header>
    )
}
