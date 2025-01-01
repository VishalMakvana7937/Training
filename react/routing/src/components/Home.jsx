import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    function handelClick() {
        navigate('/about');
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handelClick}>Move to About</button>
        </div>
    )
}

export default Home