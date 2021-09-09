import React, {useEffect, useState} from "react";
import {AnalogClock} from "./AnalogClock";
import {DigitalClock} from "./DigitalClock";

export type ClockDataType = {
    date: Date
}
export type ClockDividedType = {
    mode?: "analog" | "digital"
}

export const ClockDivided: React.FC<ClockDividedType> = (props) => {

    const [dateNew, setDateNew] = useState(new Date())

    useEffect(() => {
        const setIntervalID = setInterval(() => {
            console.log("TICK")
            setDateNew(new Date())
        }, 1000)

        return () => {
            clearInterval(setIntervalID)
        }
    }, [])

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClock date={dateNew}/>;
            break;
        case "digital":
        default:
            view = <DigitalClock date={dateNew}/>
    }

    return <>
        {view}
    </>
}