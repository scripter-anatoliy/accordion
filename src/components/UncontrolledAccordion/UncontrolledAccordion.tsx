import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";


type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordionMemo(props: AccordionPropsType) {
    console.log('Accordion rendering')

    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_CONSTANT})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

function AccordionTitleMemo(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');

    return <h3 onClick={() => {
        props.onClick()
    }}>{props.title}</h3>
}

function AccordionBodyMemo() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)
export const AccordionTitle = React.memo(AccordionTitleMemo)
export const AccordionBody = React.memo(AccordionBodyMemo)
