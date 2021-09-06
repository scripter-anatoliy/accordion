import React from "react";
import {Clock, ClockDivided} from "./Clock";
import {AnalogClock} from "./AnalogClock";

export default {
    title: "Clock ",
    component: Clock
}

export const ModeClock = () => {
    console.log("Example")
    return <>
        <Clock/>
    </>
}
export const ModeOptionClock = () => {
    console.log("Example")
    return <>
        <ClockDivided/>
    </>
}
export const ModeAnalogClock = () => {
    console.log("Example")
    return <>
        <AnalogClock mode={"analog"}/>
    </>
}
export const ModeDigitalClock = () => {
    console.log("Example")
    return <>
        <DigitalClock mode={"digital"}/>
    </>
}