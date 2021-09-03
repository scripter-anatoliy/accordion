import React, {useEffect, useState} from "react";

export const Clock = () => {
    console.log("Example SetTimeout ")
    //const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState('')
    //const [hours, setHours] = useState(0)



    useEffect(() => {
        setInterval(() => {
            const time = new Date()
            const secondTime = time.toLocaleTimeString()
            setSeconds(secondTime)
        }, 1000)
    }, [])
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log("minutes" + minutes)
    //         const minutesTime = new Date().getMinutes()
    //         setMinutes(minutesTime)
    //     }, 1000)
    // }, [minutes])
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log("hours" + hours)
    //         const hoursTime = new Date().getHours()
    //         setHours(hoursTime)
    //     }, 1000)
    // }, [hours])

    const clockStyle = {
        margin: "auto",
        maxWidth: "500px",
        minWidth: "100px",
        background: "white",
        // textAlign: "center",
        fontSize: "32px",
        padding: "10px",
        borderTop: "10px solid #55c49f",
        marginTop: "100px"
    };

    return <div>
        <div style={clockStyle}>
            <span>Time:- {seconds}</span>
        </div>
    </div>
}