import React, {ChangeEvent, useRef, useState} from 'react';
import {Meta, Story} from '@storybook/react';


export default {
    title: 'input',

} as Meta;

export const UncontrolledInput: Story = (args) => <input/>
export const TrackValueOfUncontrolledInput: Story = (args) => {
    const [value, setValue] = useState("");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        debugger
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <>
        <input onChange={onChange}/> - {value}
    </>;
}
export const GetValueOfUncontrolledInputByButtonPress: Story = (args) => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>Save</button>
        - actual value: {value}
    </>;
}

export const ControlledInput: Story = (args) => {
    const [parentValue, setParentValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}
export const ControlledCheckBox: Story = (args) => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}
export const ControlledSelect: Story = (args) => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Moscow</option>
        <option value="2">Kiev</option>
        <option value="3">Minsk</option>
    </select>

}

export const ControlledInputWithFixedValue: Story = (args) => <input value={"yoyo"}/>;




