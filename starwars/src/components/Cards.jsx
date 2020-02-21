import React from "react";
import Card from "./Card";

const Cards = props => {
    console.log(props.data);
    return (
        props.data.map(char => {
            return (<Card key={char.name} name={char.name} mass={char.mass} />);
        })
    )
}

export default Cards;