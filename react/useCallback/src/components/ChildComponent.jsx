import React from 'react'

const ChildComponent = React.memo((props) => {

    console.log("..................");


    return (
        <div>
            <button onClick={props.handelClick}>
                {props.buttonName}
            </button>
        </div>
    )
});

export default ChildComponent

// React.memo -> wrap -> component -> component re-render tabhi hoga jab props change nahi toh re-render nahi hoga
// if you are sending a function, then react.memo wont be able to save you from re-rendering