import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,
    argTypes: {
        color: {
            control: 'color'
        }
    }
} as Meta;

const callback = action("select")
const onClickCallback = action("some item was clicked")


export const WithValue: Story<SelectPropsType> = (args) => {

    const [value, setValue] = useState(1)

    const selectStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "500px"
    }

    return <div style={selectStyle}>
        <Select {...args} value={value} onChange={setValue}/>
    </div>
}

WithValue.args = {
    items: [
        {title: "Select city", value: 1},
        {title: "Evgeniy", value: 2},
        {title: "Tolya", value: 3},
        {title: "Tanya", value: 4},
        {title: "Maksim", value: 5},
        {title: "Nadya", value: 6},
    ],
}

export const WithoutValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState(0)
    return <Select {...args} value={value} onChange={setValue}/>
}

WithoutValue.args = {
    items: [
        {title: "Select city", value: 0},
        {title: "Tolya", value: 1},
        {title: "Tanya", value: 2},
        {title: "Maksim", value: 3},
        {title: "Nadya", value: 4},
    ],
}