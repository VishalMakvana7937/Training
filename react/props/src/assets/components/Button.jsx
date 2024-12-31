import React from 'react'

const Button = (props) => {
    return (
        <div>
            {props.children}
            <button type='submit' onClick={props.increment}> {props.text}</button>
        </div>
    )
}

export default Button