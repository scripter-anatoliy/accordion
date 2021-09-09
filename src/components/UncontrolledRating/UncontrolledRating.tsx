import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRatingMemo(props: RatingPropsType) {

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => {
                setValue(1);
                props.onChange(1)
            }}/>
            <Star selected={value > 1} setValue={() => {
                setValue(2);
                props.onChange(2)
            }}/>
            <Star selected={value > 2} setValue={() => {
                setValue(3);
                props.onChange(3)
            }}/>
            <Star selected={value > 3} setValue={() => {
                setValue(4);
                props.onChange(4)
            }}/>
            <Star selected={value > 4} setValue={() => {
                setValue(5);
                props.onChange(5)
            }}/>
            {/*<Star selected={props.value > 2}/><button>3</button>
            <Star selected={props.value > 3}/><button>4</button>
            <Star selected={props.value > 4}/><button>5</button>*/}
        </div>
    )
}

type StarPropsType = {
    selected: boolean,
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setValue()
    }}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
    // тоже самое, что и тернарное выражение сверху
    // if (props.selected === true) {
    //     return <span><b>Star</b></span>;
    // } else {
    //     return <span>Star</span>;
    // }
}

export const UncontrolledRating = React.memo(UncontrolledRatingMemo)
