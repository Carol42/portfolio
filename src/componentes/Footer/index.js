import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    text-align: center;
    margin-top: 100px;
`

export default function Footer() {
    return (
        <StyledFooter className="credits">Desenvolvido com &#x1F496; por Caroline Heloíse de Oliveira</StyledFooter>
    )
}