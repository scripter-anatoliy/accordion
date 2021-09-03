import React from "react";
import {Clock, ClockDivided} from "./Clock";

export default {
    title: "Clock ",
    component: Clock
}

export const ModeClock = () => {
    console.log("Example")
    return <>
        <Clock/>
        <ClockDivided/>
    </>
}