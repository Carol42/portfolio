import React from "react";
import styled from "styled-components";
import Wrapper from "../../Wrapper";
import Borda from '../../../img/border-1.svg';

const StyledContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-rows: 1.2fr 1fr 1fr;
`

const StyledItem = styled.p`
    padding: 0;
    margin: 0;
    line-height: 1.5em;
`
const StyledItalics = styled.span`
    font-style: italic;
`
export default function Frases() {
    return (
        <Wrapper slice="60" row_end="span 3" src={Borda}>
            <StyledContainer>
                <StyledItem>
                    <StyledItalics>"Stand out of line and I'll teach how to fly"</StyledItalics><br /><br />
                    Minha música favorita do Blind Guardian, <StyledItalics>Fly</StyledItalics> fala sobre inspirações e me lembra de como nossa imaginação é maravilhosa e como podemos encontrar novos caminhos ao "pensar fora da caixa".
                </StyledItem>
                <StyledItem>
                    <StyledItalics>"You better learn to dance in the rain instead of wait for the sun"</StyledItalics><br /><br />
                    Não adianta só esperar pelo melhor momento para fazer algo. Esse momento pode nunca chegar.
                </StyledItem>
                <StyledItem>
                    <StyledItalics>"... when at last the work is done, don't sit down it's time to dig another one"</StyledItalics><br /><br />
                    Em <StyledItalics>Breathe</StyledItalics>, do Pink Floyd, esse trecho me faz lembrar de nunca parar, mesmo depois de atingir um objetivo grandioso. A vida é um processo de aperfeiçoamento.
                </StyledItem>
            </StyledContainer>
            <h3>Frases que me inspiram</h3>
            </Wrapper>
        )
}