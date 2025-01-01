import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                {/* Using Link to navigate between pages */}
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li> */}

                {/* Using NavLink to highlight the active route */}
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar