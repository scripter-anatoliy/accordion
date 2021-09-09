import React, {useEffect, useState} from "react";
import style from './Clock.module.css';

export const Clock = () => {

    const [seconds, setSeconds] = useState('')

    useEffect(() => {
        setInterval(() => {
            const time = new Date()
            const secondTime = time.toLocaleTimeString()
            setSeconds(secondTime)
        }, 1000)
    }, [])

    return <div>
        <div className={style.clockStyle}>
            <span>Samara time {seconds}</span>
        </div>
    </div>
}



