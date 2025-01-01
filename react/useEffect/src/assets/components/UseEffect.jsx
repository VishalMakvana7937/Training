import { useEffect, useState } from 'react'
import React from 'react'

const UseEffect = () => {
    // First -> side effect function/logic (perform action)
    // Second -> clean-up function (undo action)
    // third -> comma separated dep list

    // useEffect(() => {
    //   first

    //   return () => {
    //     second
    //   }
    // }, [third])

    // variation:1
    // run on every render
    // useEffect(() => {
    //   alert("I am running on every render")
    // })

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    function handelClick() {
        setCount(count + 1);
    }

    function handelClickTotal() {
        setTotal(total + 1);
    }

    // variation:2
    // that runs on only first render
    // useEffect(() => {
    //   alert("I am running on only first render")
    // }, [])

    // variation:3
    // useEffect(() => {
    //   alert("T will run every time when count is updated");

    // }, [count])

    // variation:4
    // multiple dependencies
    // useEffect(() => {
    //   alert("T will run every time when count or total is updated");

    // }, [count, total])

    // variation:5
    // its baarlet's add a cleanup function
    useEffect(() => {
        alert("count is updated");
        return () => {
            alert("count is unmounted from UI");
        }
    }, [count])

    return (
        <>
            <div>
                <button onClick={handelClick}>
                    Update count
                </button>
                <p> count is: {count}</p>

                <br />

                <button onClick={handelClickTotal}>
                    Update total
                </button>
                <p> total is: {total}</p>
            </div>
        </>
    )
}

export default UseEffect