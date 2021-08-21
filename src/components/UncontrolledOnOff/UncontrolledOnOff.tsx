import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void,
    defaultOnOff?: boolean | undefined
}

export function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState(props.defaultOnOff ? props.defaultOnOff : false);

    const onSStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "3px",
        backgroundColor: on ? "green" : "white"
    };
    const offSStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "3px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorSStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "7px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onSStyle} onClick={onClicked}>on</div>
            <div style={offSStyle} onClick={offClicked}>off
            </div>
            <div style={indicatorSStyle}></div>
        </div>
    )
}
