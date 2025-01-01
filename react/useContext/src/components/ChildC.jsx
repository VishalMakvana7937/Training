import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);

    const { theme, setTheme } = useContext(ThemeContext);

    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        // <div>
        //     Data : {user.name}
        // </div>

        <div>
            <button onClick={changeTheme}>
                Chnage Theme
            </button>
        </div>
    )
}

export default ChildC