import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    box-sizing: border-box;
    border-image-slice: ${props => props.slice};
    border-image-source: url(${props => props.src});
    border-image-width: 50px 50px 50px 50px;
    padding: 1.5em;
    margin: auto auto;
    width: 90%;
    height: 92%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    grid-row-end: ${props => props.row_end};
    grid-column-end: ${props => props.column_end};
`
export default function Wrapper (props) {
    return(
        <StyledWrapper slice={props.slice} row_end={props.row_end} src={props.src} column_end={props.column_end}>
            {props.children}
        </StyledWrapper>
    )
}