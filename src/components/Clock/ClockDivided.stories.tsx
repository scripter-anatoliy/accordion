import React from "react";
import {ClockDivided} from "./ClockDivided";

export default {
    title: "Clock ",
    component: ClockDivided
}

export const ModeAnalogClock = () => {
    return <>
        <ClockDivided mode={"analog"}/>
    </>
}
export const ModeDigitalClock = () => {
    return <>
        <ClockDivided mode={"digital"}/>
    </>
}