import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashbord = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet/>   
        </div>
    )
}

export default Dashbord