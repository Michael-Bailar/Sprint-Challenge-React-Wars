import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    color: #443e3e;
`;

const PaginationLink = styled.button`
    margin: 0% 5%;
    font-weight: bold;
    color: #443e3e;
    text-shadow: 0.5px 0px 0.5px #2b2b2b;
    background: none;
    border-radius: 7px;
    width: 100px;
    height: 40px;
`;

const CurrentPageNumber = styled.div`
    margin: 0% 5%;
    font-size:1.5rem;
    font-weight: bold;
    color: #443e3e;
    text-shadow: 0.5px 0px 0.5px #2b2b2b;
    background: none;
    border-radius: 7px;
    width: 100px;
    height: 30px
`;

const Pagination = props => {
    return (
        <PaginationContainer className="pagination-container">
            <PaginationLink className="next-button" onClick={handleBackClick}>Back</PaginationLink>
            <CurrentPageNumber>Page: {props.pageNumber}</CurrentPageNumber>
            <PaginationLink className="back-button" onClick={handleNextClick}>Next</PaginationLink>
        </PaginationContainer>

        
    )

    function handleBackClick(e){
        e.preventDefault();
        console.log("Back");
        props.decreasePageNumber();
        
    }
    function handleNextClick(e){
        e.preventDefault();
        console.log("Next");
        props.increasePageNumber();
    }
}

export default Pagination;