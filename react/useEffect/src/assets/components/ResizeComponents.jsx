import React, { useState } from 'react'
import { useEffect } from 'react';

const ResizeComponents = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        console.log("Event listener added");

        window.addEventListener('resize', handleResize);

        return () => {
            console.log("Event listener removed");
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <p>Width: {width} px</p>
        </div>
    )
}

export default ResizeComponents