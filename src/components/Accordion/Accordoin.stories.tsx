import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color'
        }
    }
} as Meta;

const callback = action("accordion node change event  fired")
const onClickCallback = action("some item was clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    collapsed: true,
    titleValue: "Menu",
    onChange: callback,
    items: [],
    onClick: onClickCallback
}

export const UserUnCollapsedMode = Template.bind({})
UserUnCollapsedMode.args = {
    collapsed: false,
    titleValue: "User",
    onChange: callback,
    items: [
        {title: "Tolya", value: 1},
        {title: "Tanya", value: 2},
        {title: "Maksim", value: 3},
        {title: "Nadya", value: 4},
    ],
    onClick: onClickCallback
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion {...args} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
}

ModeChanging.args = {
    titleValue: "Menu",
    items: [
        {title: "Tolya", value: 1},
        {title: "Tanya", value: 2},
        {title: "Maksim", value: 3},
        {title: "Nadya", value: 4},
    ],
    onClick: (value) => {
        alert(`user wish ID ${value} should be happy`)
    }
}
