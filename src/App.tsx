import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log('App rendering')

    //let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [switchOn, setSwitchOn] = useState(false);
    //let [accordionCollapsedValue, setAccordionCollapsed] = useState(false);

    return (
        <div className={'App'}>
            {/*<PageTitle title={"Good Moning"}/>*/}
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<Rating value={ratingValue}*/}
            {/*        onClick={setRatingValue}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<OnOff  on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<Accordion titleValue={"Меню"}*/}
            {/*           collapsed={accordionCollapsedValue}*/}
            {/*           onChange={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsedValue)*/}
            {/*           }}*/}
            {/*/>*/}
            {/*<UncontrolledRating  />*/}
            {/*<UncontrolledAccordion titleValue={"Меню"} />*/}
            {/*<UncontrolledAccordion titleValue={"Супер Меню"} />*/}

        </div>
    );
}

export default App;
