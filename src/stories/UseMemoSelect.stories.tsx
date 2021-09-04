import React, {useMemo, useState} from 'react';
import {Meta} from '@storybook/react';
import {Select} from "../components/Select/Select";
import {SelectMemo} from "../components/SelectUseMemo/SelectUseMemo";

export default {
    title: 'SelectMemo',
    component: Select,
    argTypes: {
        color: {
            control: 'color'
        }
    }
} as Meta;

export const SelectUseMemoDemo = () => {
    console.log("wish")
    let countryUSSR = [
        {countryID: 1, city: "Moscow", value: 1},
        {countryID: 1, city: "Samara", value: 2},
        {countryID: 1, city: "St.Petersburg", value: 3},
        {countryID: 2, city: "Minsk", value: 4},
        {countryID: 2, city: "Vitebsk", value: 5},
        {countryID: 2, city: "Gomel", value: 6},
        {countryID: 3, city: "Kiev", value: 7},
        {countryID: 3, city: "Odessa", value: 8},
        {countryID: 3, city: "Kharkov", value: 9},
    ]

    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(2)
    const [value3, setValue3] = useState(1)
    const [countryRussia, setCountryRussia] = useState(countryUSSR)
    const [cityOfValueA, setCityOfValueB] = useState(countryUSSR)
    const [cityOfValueB, setCityOfValueA] = useState(countryUSSR)

    const newArrayCountry = useMemo(() => {
        console.log("county")
        console.log(countryRussia)
        return countryRussia.filter(c => c.countryID === 1)
    }, [countryRussia])

    const newArrayCityA = useMemo(() => {

        console.log("cityA")
        console.log(cityOfValueA)
        return cityOfValueA.filter(c => c.city.toLowerCase().indexOf("a") > -1)
    }, [])

    const newArrayCityB = useMemo(() => {
        console.log("cityB")
        return cityOfValueB.filter(c => c.city.toLowerCase().indexOf("o") > -1)
    }, [cityOfValueB])

    const selectStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "500px"
    }

    return <div style={selectStyle}>
        <div><SelectMemo items={newArrayCountry} value={value1} onChange={setValue1}/></div>
        <div><SelectMemo items={newArrayCityA} value={value2} onChange={setValue2}/></div>
        <div><SelectMemo items={newArrayCityB} value={value3} onChange={setValue3}/></div>
    </div>
}


