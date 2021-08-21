import React from 'react';
import {Meta} from '@storybook/react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
} as Meta;

const callback = action("on or off clicked")

export const UnOnMode = () => <UncontrolledOnOff defaultOnOff={true} onChange={callback}/>
export const UnOffMode = () => <UncontrolledOnOff defaultOnOff={false} onChange={callback}/>
