import React from "react";
import style from './AnalogClock.module.css';
import clockFace from "../../assets/img/clockFace.png"
import clockJs from "../../assets/img/clockJs.png"
import {ClockDataType} from "./ClockDivided";

export const AnalogClock: React.FC<ClockDataType> = ({date}) => {
    console.log("analog")
    const deg = 6;
    const hr = document.querySelector('#hr');
    const sc = document.querySelector('#sc');

    setInterval(() => {
        let hh = date.getHours() * 30;
        let mm = date.getMinutes() * deg;
        let ss = date.getSeconds() * deg;
        // @ts-ignore
        hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        // @ts-ignore
        mn.style.transform = `rotateZ(${mm}deg)`;
        // @ts-ignore
        sc.style.transform = `rotateZ(${ss}deg)`;
    })

        // const hrStyle = {
        //     transform: `rotateZ(${(date.getHours() * 30) + (date.getMinutes() / 12)}deg)`
        // }
        // const mnStyle = {
        //     transform: `rotateZ(${date.getMinutes() * 6}deg)`
        // }
        // const scStyle = {
        //     transform: `rotateZ(${date.getSeconds() * 6}deg)`
        // }


        return <div className={style.body}>
            <div className={style.clock}>
                <img src={clockFace} alt=""/>
                <img src={clockJs} alt=""/>
                <div className={style.hour}>
                    <div className={style.hr}
                         id={"hr"}>
                    </div>
                </div>
                <div className={style.min}>
                    <div className={style.mn}
                         id={"mn"}>
                    </div>
                </div>
                <div className={style.sec}>
                    <div className={style.sc}
                         id={"sc"}>
                    </div>
                </div>
            </div>
        </div>
    }



