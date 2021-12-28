import React from "react";
import styled from "styled-components";
import Wrapper from "../../Wrapper";
import ProgressBar from "../ProgressBar";
import Borda from "../../../img/borda-1.svg";

const StyledList = styled.ul`
    list-style-type: none;
    width: 80%;
`
const StyledItem = styled.li`
    padding: .6em 0;
`

export default function Idiomas() {
    return (
        <Wrapper slice="50" row_end="span 1" src={Borda}>
               <StyledList>
                <StyledItem>Português<ProgressBar width="95%" /></StyledItem>
                <StyledItem>Inglês<ProgressBar width="80%" /></StyledItem>
                <StyledItem>Espanhol<ProgressBar width="50%" /></StyledItem>
            </StyledList>
            <h3>Idiomas</h3>
        </Wrapper>
    )
}