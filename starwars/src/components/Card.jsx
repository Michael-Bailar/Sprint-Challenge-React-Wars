import React from "react"

const Card = props => {

    console.log(props);

    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>Mass: {props.mass}Kg</p>
        </div>
    )
}

export default Card;