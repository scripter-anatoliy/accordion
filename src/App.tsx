import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log('App rendering')

    let [switchOn, setSwitchOn] = useState(false);

    return (
        <div className={'App'}>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

export default App;
