import React, {useEffect, useState} from "react";
import {Clock} from "./Clock";

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