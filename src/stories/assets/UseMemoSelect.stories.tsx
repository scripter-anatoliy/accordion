import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {Select, SelectPropsType} from "../../components/Select/Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'SelectMemo',
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
        display: "inline-block"
    }

    const spanSelectStyle = {
        paddingRight: "10px"
    }


    return <div style={selectStyle}>
        <div><Select {...args} value={value} onChange={setValue}/></div>
        <div><Select {...args} value={value} onChange={setValue}/></div>
        <div><Select {...args} value={value} onChange={setValue}/></div>

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
