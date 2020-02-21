import React from "react"
import styled from "styled-components";
import cardImg from "./cardback.jpg";

const CardDiv = styled.div`
    width:15%;
    margin: 5%;
    background-color:white;
    background-image: url(${cardImg});
    background-size: cover;
    border-radius: 7px;
    color: #443e3e;
    box-shadow: 4px 4px 4px #2b2b2b;
    font-weight: bold;
    
`;

const Card = props => {
    return (
        props.data.map(char => {

            return (
                <CardDiv className="card">
                    <p>{char.name}</p>
                    <p>Mass: {char.mass}Kg</p>
                </CardDiv>
            )
        })
    )
}

export default Card;