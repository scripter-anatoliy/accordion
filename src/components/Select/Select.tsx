import React, {KeyboardEvent, useEffect, useState} from "react";
import styles from './Select.module.css';
import arrowDown from "../img/arrowDown.svg"
import arrowUp from "../img/arrowUp.svg"

type ItemsType = {
    title: string,
    value: any
}

export type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void
    items: ItemsType[]
}


export function SelectMemo(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)

    const selectItems = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemValue)

    useEffect(() => {
        setHoveredItemValue(props.value);
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectItems) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return <>
        {/*<select name="" id="">*/}
        {/*    <option value="">Minsk</option>*/}
        {/*    <option value="">Moscow</option>*/}
        {/*    <option value="">Kiev</option>*/}
        {/*    <option value="">Samara</option>*/}
        {/*</select>*/}
        <div className={styles.select}
             onKeyUp={onKeyUp}
             tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectItems && selectItems.title}
                <img src={!active ? arrowDown : arrowUp} alt=""/>
            </span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i =>
                        // чтоб скрыть после выбранного значения onClick={() => {
                        //                             props.onChange(i.value); toggleItems()
                        //                         }}
                        <div className={styles.item + " " + (hoveredItem === i ? styles.hovered : "")}
                             onMouseEnter={() => {
                                 setHoveredItemValue(i.value)
                             }}
                             onClick={() => {
                                 onItemClick(i.value)
                             }}
                             key={i.value}>
                            {i.title}

                        </div>).splice(1, 5)}
                </div>
            }
        </div>
    </>
}
export const Select = React.memo(SelectMemo)