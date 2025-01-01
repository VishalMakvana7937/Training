import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    function handelClick() {
        navigate('/dashboard');
    }
    return (
        <div>
            <button onClick={handelClick}>Move to Dashbord</button>
        </div>
    )
}

export default About