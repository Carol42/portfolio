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

export default function Ferramentas() {
    return (
        <Wrapper slice="60" row_end="span 2" src={Borda}>
            <StyledList>
                <StyledItem>Git / Github<ProgressBar width="25%" /></StyledItem>
                <StyledItem>Scrum<ProgressBar width="40%" /></StyledItem>
                <StyledItem>Linux Mint / Ubuntu<ProgressBar width="70%" /></StyledItem>
                <StyledItem>Fusion 360<ProgressBar width="40%" /></StyledItem>
                <StyledItem>Gimp<ProgressBar width="40%" /></StyledItem>
                <StyledItem>Microsoft Office<ProgressBar width="70%" /></StyledItem>
            </StyledList>
            <h3>Ferramentas <FontAwesomeIcon icon={ faDAndD } /> Softwares</h3>
            </Wrapper>
        )
}