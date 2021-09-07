import React from "react";
import style from './AnalogClock.module.css';
import clockFace from "../../assets/img/clockFace.png"
import clockJs from "../../assets/img/clockJs.png"
import {ClockDataType} from "./ClockDivided";

export const AnalogClock: React.FC<ClockDataType> = ({date}) => {
    console.log("analog")

    const deg = 6;
    const hr = document.querySelector('#hr') as HTMLStyleElement;
    const mn = document.querySelector('#mn') as HTMLStyleElement;
    const sc = document.querySelector('#sc') as HTMLStyleElement;


    console.log('date')
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;

    if (hr !== null) {
        hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    }
    if (mn !== null) {
        mn.style.transform = `rotateZ(${mm}deg)`;
    }
    if (sc !== null) {
        sc.style.transform = `rotateZ(${ss}deg)`;
    }

    return <div>
        <div className={style.clock}>
            <img src={clockFace} alt=""/>
            <img src={clockJs} alt=""/>
            <div className={style.hour}>
                <div className={style.hr}
                     id="hr">
                </div>
            </div>
            <div className={style.min}>
                <div className={style.mn}
                     id="mn">
                </div>
            </div>
            <div className={style.sec}>
                <div className={style.sc}
                     id="sc">
                </div>
            </div>
        </div>
    </div>
}



