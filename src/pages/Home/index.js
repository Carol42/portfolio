import React from "react";
import styled from 'styled-components';
import PageTemplate from "../../componentes/PageTemplate";
import Linguagens from "../../componentes/FirstPageContent/Linguagens";
import Personalidade from "../../componentes/FirstPageContent/Personalidade";
import Idiomas from "../../componentes/FirstPageContent/Idiomas";
import Ferramentas from "../../componentes/FirstPageContent/Ferramentas";
import Frases from "../../componentes/FirstPageContent/Frases";

const StyledGrid = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: .7fr .7fr .7fr;
    grid-template-rows: 2fr 1fr 1fr 2fr;
`

export default function Home() {
    return (
        <PageTemplate>
                <StyledGrid>
                    <Idiomas />
                    <Linguagens />
                    <Frases />
                    <Ferramentas />
                    <Personalidade />
                </StyledGrid>
        </PageTemplate>
    )
}