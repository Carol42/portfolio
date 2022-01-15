import React from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
    margin: 2em auto;
    width: 50%;
    display: grid;
    grid-template-columns: .2fr 2fr;
`
const StyledLink = styled.a`
    grid-row-end: span 2;
    width: 50px;
    height: auto;
`

const StyledImg = styled.img`
    width: 50px;
    height: auto;
`
const StyledTitle = styled.p`
    font-weight: 700;
    font-size: 1.5em;
`
const StyledDate = styled.p`
    font-style: italic;
`
const StyledActivities = styled.p`
    grid-column-end: span 2;
    margin: 1em 0;
`
const StyledSeeMore = styled.div`
    grid-column-end: span 2;
`

export default function JobCard(props) {
    return (
        <StyledWrap>
           <StyledLink href={ props.companyLink } ><StyledImg src={ props.src } alt={ props.company } title={ props.company } /></StyledLink>
           <StyledTitle>{ props.jobTitle }</StyledTitle>
            <StyledDate>{ props.date }</StyledDate>
            <StyledActivities>{ props.activities }</StyledActivities>
            <StyledSeeMore>{ props.children }</StyledSeeMore>
        </StyledWrap>
    )
}
