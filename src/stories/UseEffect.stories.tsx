import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect demo",
}

export const SimpleExample = () => {
    console.log("Example")
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    // можно делать сайдэфекты - асинхронные оперции, запросы на сервер.
    // useEffect будет отрабатывать, только после того, как отрисуется компонента.
    useEffect(() => {
        //console.log("useEffect")
        // api.getUser().then('')
        //setInterval()
        // indexedDB
        // document.getElementById()
        // document.title
    })
    //1. каждый раз будет отрабатывать, после отрисовки компоненты
    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })
//2. отработает только один раз, когда компонента отрисуется.
    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, [])
    //3. каждый раз будет отрабатывать, если изменилась зависимоть
    useEffect(() => {
        console.log("useEffect first render and every counter render")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello {fake}
        <button onClick={() => setFake(fake + 1)}>fake</button>
        hello {counter}
        <button onClick={() => setCounter(counter + 1)}>counter</button>

    </>
}

export const SetTimeoutExample = () => {
    console.log("Example SetTimeout ")
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("setTimeout")
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake</button>*/}
        hello counter: {counter}
        {/*<button onClick={() => setCounter(counter + 1)}>counter</button>*/}

    </>
}

