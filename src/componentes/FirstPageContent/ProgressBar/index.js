import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
    background-color: crimson;
    width: ${props => props.width};
    border-radius: 50px;
    height: 7px;
    margin-top: .4em;
    `
    const StyledProgressContainer = styled.div`
    background-color: lightgrey;
    border-radius: 50px;
    height: 7px;
    margin-top: .4em;
    `

export default function ProgressBar (props) {
    
    return(
        <StyledProgressContainer>
            <StyledProgressBar width={ props.width }/>
        </StyledProgressContainer>
    )
}