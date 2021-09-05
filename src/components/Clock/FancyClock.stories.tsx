import React from "react";
import {FancyClock} from "./FancyClock";

export default {
    title: "Clock ",
    component: FancyClock
}

export const ModeFancyClock = () => {
    console.log("Clock")
    return <>
      <FancyClock/>
    </>
}
