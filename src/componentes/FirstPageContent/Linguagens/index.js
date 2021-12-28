import React from "react";
import styled from "styled-components";
import Wrapper from "../../Wrapper";
import ProgressBar from "../ProgressBar";
import Borda from '../../../img/borda-1.svg';

const StyledList = styled.ul`
    list-style-type: none;
    width: 80%;
`
const StyledItem = styled.li`
    padding: .6em 0;
`

export default function Linguagens() {
    return (
        <Wrapper slice="60" row_end="span 3" src={Borda}>
            <StyledList>
                <StyledItem>HTML<ProgressBar width="85%" /></StyledItem>
                <StyledItem>CSS<ProgressBar width="75%" /></StyledItem>
                <StyledItem>JavaScript<ProgressBar width="45%" /></StyledItem>
                <StyledItem>ReactJS<ProgressBar width="65%" /></StyledItem>
            </StyledList>
            <h3>Linguagens & Frameworks</h3>
            </Wrapper>
        )
}