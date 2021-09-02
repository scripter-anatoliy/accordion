import React, {useMemo, useState} from 'react';
import {Meta} from '@storybook/react';
import {Select} from "../../components/Select/Select";
import {SelectMemo} from "../../components/SelectUseMemo/SelectUseMemo";


export default {
    title: 'SelectMemo',
    component: Select,
    argTypes: {
        color: {
            control: 'color'
        }
    }
} as Meta;


export const WithValue = () => {
    console.log("wish")
    let countryUSSR = [
        {countryID: 1, town: "Moscow", value: 1},
        {countryID: 1, town: "Samara", value: 2},
        {countryID: 1, town: "St.Petersburg", value: 3},
        {countryID: 2, town: "Minsk", value: 4},
        {countryID: 2, town: "Vitebsk", value: 5},
        {countryID: 2, town: "Gomel", value: 6},
        {countryID: 3, town: "Kiev", value: 7},
        {countryID: 3, town: "Odessa", value: 8},
        {countryID: 3, town: "Kharkov", value: 9},
    ]


    const [value, setValue] = useState(1)
    const [countryRussia, setCountryRussia] = useState(countryUSSR)

    const newArrayCountry = useMemo(() => {
        return countryRussia.filter(c => c.countryID === 1)
    }, [countryRussia])

    const newArrayTown = useMemo(() => {
        return countryRussia.filter(c => c.town.toLowerCase().indexOf("a") > -1)
    }, [countryRussia])

    const selectStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "500px"
    }

    return <div style={selectStyle}>
        <div><SelectMemo items={newArrayCountry} value={value} onChange={setValue}/></div>
        <div><SelectMemo items={newArrayTown} value={value} onChange={setValue}/></div>
    </div>
}


