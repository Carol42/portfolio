import React from "react";
import MainContent from "../../componentes/MainContent";
import PageTemplate from "../../componentes/PageTemplate";
import Habilidades from "../../componentes/FirstPageContent/Habilidades";
import Personalidade from "../../componentes/FirstPageContent/Personalidade";
import Idiomas from "../../componentes/FirstPageContent/Idiomas";

import './style.css';

export default function Home() {
    return (
        <PageTemplate>
            <MainContent>
                <div className="first-page-wrap">
                    <Habilidades />
                    <Personalidade />
                    <Idiomas />
                </div>
            </MainContent>
        </PageTemplate>
    )
}