import React from "react";

type ItemsType = {
    title: string,
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * optional color oh header text
     */
    color?: string
    // альтернатива такой записи items: Array<ItemsType>, тоже что и items: ItemsType[]
    items: ItemsType[]
    onClick: (value: any) => void
}

export function AccordionMemo(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
                            color={props.color}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');

    return <h3
        style={{color: props.color ? props.color : "black"}}
        onClick={(e) => props.onChange()}>{props.title}</h3>
}

export type AccordionBodyPropsType = {
    items: Array<ItemsType>
    onClick: (value: any) => void
}

function AccordionBodyMemo(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {
            props.onClick(i.value)
        }} key={index}>{i.title}</li>)}
    </ul>
}

export const Accordion = React.memo(AccordionMemo)
export const AccordionBody = React.memo(AccordionBodyMemo)