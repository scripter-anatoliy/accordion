import React, {useEffect, useState} from "react";
import style from "./Clock.module.css";
import {AnalogClock} from "./AnalogClock";
import {DigitalClock} from "./DigitalClock";

export const utilTimeString = (num: number) => num < 10 ? "0" + num : num

export type ClockDataType= {
    date: Date
}
export type ClockDividedType = {
    mode?: "analog" | "digital"
}

export const ClockDivided: React.FC<ClockDividedType> = (props: ClockDividedType) => {

    const [data, setData] = useState(new Date())

    useEffect(() => {
        const setIntervalID = setInterval(() => {
            console.log("TICK")
            setData(new Date())
        }, 1000)

        return () => {
            clearInterval(setIntervalID)
        }
    }, [])

    let view

    switch (props.mode){
        case 'analog':
            view = <AnalogClock date={date}/>;
            break
        case "digital":
        default:
            view = <DigitalClock date={date}/>
    }

    return <div>
        {view}
    </div>
}