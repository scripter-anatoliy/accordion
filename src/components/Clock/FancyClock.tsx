import React, {useEffect, useState} from "react";
import style from './FancyClock.module.css';


export const FancyClock = () => {

    // const [hr, setHr] = useState(document.querySelector('#hr'))
    // const [sc, setSc] = useState(document.querySelector('#hr'))
    // const [mn, setMn] = useState(document.querySelector('#hr'))



    useEffect(() => {
        const deg = 6;
        const hr = document.querySelector('#hr');
        const sc = document.querySelector('#sc');

        setInterval(() => {
            let data = new Date()
            let hh = data.getHours() * 30;
            let mm = data.getMinutes() * deg;
            let ss = data.getSeconds() * deg;


            // @ts-ignore
            hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
            // @ts-ignore
            mn.style.transform = `rotateZ(${mm}deg)`;
            // @ts-ignore
            sc.style.transform = `rotateZ(${ss}deg)`;
        },)
    }, [])


    return <div className={style.body}>
        <div className={style.clock}>
            <div className={style.hour}>
                <div className={style.hr} id="hr"></div>
            </div>
            <div className={style.min}>
                <div className={style.mn} id="mn"></div>
            </div>
            <div className={style.sec}>
                <div className={style.sc} id="sc"></div>
            </div>
        </div>
    </div>
}



