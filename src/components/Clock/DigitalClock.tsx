import {ClockDataType} from "./ClockDivided";
import React from "react";
import style from "./Clock.module.css";

const utilTimeString = (num: number) => num < 10 ? "0" + num : num

export const DigitalClock: React.FC<ClockDataType> = ({date}) => {
    console.log("DigitalClock")

    return <div>
        <div className={style.clockStyle}>
            <span>{utilTimeString(date.getHours())}</span>
            :
            <span>{utilTimeString(date.getMinutes())}</span>
            :
            <span>{utilTimeString(date.getSeconds())}</span>
        </div>
    </div>
}