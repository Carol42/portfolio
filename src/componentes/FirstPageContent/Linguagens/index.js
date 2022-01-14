import React from "react";
import styled from "styled-components";
import Wrapper from "../../Wrapper";
import ProgressBar from "../ProgressBar";
import Borda from '../../../img/border-1.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDAndD } from "@fortawesome/free-brands-svg-icons";

const StyledList = styled.ul`
    list-style-type: none;
    width: 80%;
`
const StyledItem = styled.li`
    padding: .6em 0;
`

export default function Linguagens() {
    return (
        <Wrapper slice="60" row_end="span 1" src={Borda}>
            <StyledList>
                <StyledItem>HTML<ProgressBar width="85%" /></StyledItem>
                <StyledItem>CSS<ProgressBar width="75%" /></StyledItem>
                <StyledItem>JavaScript<ProgressBar width="45%" /></StyledItem>
                <StyledItem>ReactJS<ProgressBar width="65%" /></StyledItem>
                <StyledItem>C<ProgressBar width="25%" /></StyledItem>
                <StyledItem>Python<ProgressBar width="27%" /></StyledItem>
            </StyledList>
            <h3>Linguagens <FontAwesomeIcon icon={ faDAndD } /> Frameworks</h3>
            </Wrapper>
        )
}