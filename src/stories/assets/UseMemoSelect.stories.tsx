import React, {KeyboardEvent, useEffect, useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {Select, SelectPropsType} from "../../components/Select/Select";
import {action} from "@storybook/addon-actions";
import styles from "../../components/Select/Select.module.css";
import arrowDown from "../../components/img/arrowDown.svg";
import arrowUp from "../../components/img/arrowUp.svg";


export default {
    title: 'SelectMemo',
    component: Select,
    argTypes: {
        color: {
            control: 'color'
        }
    }
} as Meta;

type ItemsType = {
    town: string,
    value: any
}

export type SelectMemoPropsType = {
    value?: any,
    onChange: (value: any) => void
    items: ItemsType[]
}


export function SelectUseMemo(props: SelectMemoPropsType) {

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
            <span className={styles.main} onClick={toggleItems}>{selectItems && selectItems.town}
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
                            {i.town}

                        </div>)}
                </div>
            }
        </div>
    </>
}

export const SelectMemo = React.memo(SelectUseMemo)

export const WithValue = () => {

    let countryArrayRussia = [
       {town: "Moscow", value: 1},
       {town: "Samara", value: 2},
       {town: "St.Petersburg", value: 3},
    ]
    let countryArrayBelarus = [
       {town: "Minsk", value: 4},
       {town: "Vitebsk", value: 5},
       {town: "Gomel", value: 6},
    ]
    let countryArrayUkraine = [
       {town: "Kiev", value: 7},
       {town: "Odessa", value: 8},
       {town: "Kharkov", value: 9},
    ]

    const [value, setValue] = useState(1)
    const [countryRussia, setCountryRussia] = useState(countryArrayRussia)
    const [countryBelarus, setCountryBelarus] = useState(countryArrayBelarus)
    const [countryUkraine, setCountryUkraine] = useState(countryArrayUkraine)

    const selectStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "500px"
    }

    return <div style={selectStyle}>
        <div><SelectMemo items={countryRussia} value={value} onChange={setValue}/></div>
        <div><SelectMemo items={countryBelarus} value={value} onChange={setValue}/></div>
        <div><SelectMemo items={countryUkraine} value={value} onChange={setValue}/></div>
    </div>
}


