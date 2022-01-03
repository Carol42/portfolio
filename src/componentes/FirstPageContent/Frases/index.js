import React from "react";
import styled from "styled-components";
import Wrapper from "../../Wrapper";
import Borda from '../../../img/border-1.svg';

const StyledList = styled.ul`
    list-style-type: none;
    width: 80%;
`
const StyledItem = styled.li`
    padding: .6em 0;
`

export default function Frases() {
    return (
        <Wrapper slice="60" row_end="span 3" src={Borda}>
            <StyledList>
                <StyledItem>"Stand out of line and I'll teach how to fly"</StyledItem>
                <StyledItem>"You better learn to dance in the rain nstead of wait for the sun"</StyledItem>
                <StyledItem>"... when at last the work is done don't sit down it's time to dig another one"</StyledItem>
            </StyledList>
            <h3>Frases que me inspiram</h3>
            </Wrapper>
        )
}