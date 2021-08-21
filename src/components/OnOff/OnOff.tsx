import React from "react";

type PropsType = {
    on: boolean;
    onChange: (onValue: boolean)=> void
}

export function OnOff(props: PropsType) {

    const onSStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "3px",
        backgroundColor: props.on ? "green" : "white"
    };
    const offSStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "3px",
        backgroundColor: props.on ? "white" : "red"
    };
    const indicatorSStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "7px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    };
    return (
        <div>
            <div style={onSStyle} onClick={ () => { props.onChange(true) }}>on</div>
            <div style={offSStyle} onClick={ () => { props.onChange(false) }}>off</div>
            <div style={indicatorSStyle}></div>
        </div>
    )
}
