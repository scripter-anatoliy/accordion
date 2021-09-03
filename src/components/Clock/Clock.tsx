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

const utilTimeString = (num: number) => num < 10 ? "0" + num : num

export const ClockDivided = () => {

    const [data, setData] = useState(new Date())

    useEffect(() => {

        const setIntervalID = setInterval(() => {
            console.log("TICK")
            setData(new Date())
        }, 1000)

        return ()=> {

            clearInterval(setIntervalID)
        }

    }, [])

    return <div>
        <div className={style.clockStyle}>
            <span>{utilTimeString(data.getHours())}</span>
            :
            <span>{utilTimeString(data.getMinutes())}</span>
            :
            <span>{utilTimeString(data.getSeconds())}</span>
        </div>
    </div>
}