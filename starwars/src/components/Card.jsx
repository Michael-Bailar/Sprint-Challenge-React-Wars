import React from "react"
import styled from "styled-components";
import cardImg from "./cardback.jpg";

const CardDiv = styled.div`
    width:20%;
    margin: 5%;
    background-color:white;
    background-image: url(${cardImg});
    background-size: cover;
    border-radius: 7px;
    color: #443e3e;
    box-shadow: 4px 4px 4px #2b2b2b;
`;

const Card = props => {
    return (
        props.data.map(char => {

            return (
                <CardDiv className="card">
                    <h2>{char.name}</h2>
                    <p>Mass: {char.mass}Kg</p>
                </CardDiv>
            )
        })
    )
}

export default Card;