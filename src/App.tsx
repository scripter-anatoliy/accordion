import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    console.log('App rendering')
    return (
        <div>
           <PageTitle title={"Good Moning"}/>
           <PageTitle title={"This is APP component"}/>
           <Rating value={0}/>
           <Accordion titleValue={"Меню"} collapsed={true}/>
           <Accordion titleValue={"Супер Меню"} collapsed={false}/>
           <Rating value={1}/>
           <Rating value={2}/>
           <Rating value={3}/>
           <Rating value={5}/>
        </div>
    );
}

type PageTittlePropsType = {
    title: string
}

function PageTitle(props: PageTittlePropsType) {
    console.log('AppTitle rendering')
    return <h3>{ props.title }</h3>
}



export default App;
