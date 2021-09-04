import React, {useState} from "react";

export default {
    title: "UseState demo",
}

function generation() {
    console.log("generation")
    return 1;
}

export const Example1 = () => {
    console.log("Example")
    const [counter, setCounter] = useState(generation)

    const generateState = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(generateState)}>+</button>
        {counter}
    </>
}