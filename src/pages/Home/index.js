import React from "react";
import styled from 'styled-components';
import PageTemplate from "../../componentes/PageTemplate";
import Habilidades from "../../componentes/FirstPageContent/Habilidades";
import Personalidade from "../../componentes/FirstPageContent/Personalidade";
import Idiomas from "../../componentes/FirstPageContent/Idiomas";

const StyledGrid = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: .7fr 1.3fr;
    grid-template-rows: 2fr 1fr 1fr 2fr;
`

export default function Home() {
    return (
        <PageTemplate>
                <StyledGrid>
                    <Habilidades />
                    <Habilidades />
                    <Idiomas />
                    <Personalidade />
                </StyledGrid>
        </PageTemplate>
    )
}