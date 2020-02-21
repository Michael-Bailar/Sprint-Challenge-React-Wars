import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width:80%;
    max-height: 50px;
    margin-left:10%;
`;

const Cards = props => {
    return (
                <CardContainer className="card-container">
                    <Card data={props.data} />
                </CardContainer>
        );
}

export default Cards;