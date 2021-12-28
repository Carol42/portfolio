import React from "react";
import Wrapper from "../../Wrapper";
import ProgressBar from "../ProgressBar";
import Borda from "../../../img/borda-1.svg";

import '../../FirstPageContent/style.css';

export default function Idiomas() {
    return (
        <Wrapper slice="50" row_end="span 1" src={Borda}>
               <ul>
                <li>Português
                    <ProgressBar width="90%" />
                </li>
                <li>Inglês
                    <ProgressBar width="80%" />
                </li>
                <li>Espanhol
                    <ProgressBar width="50%" />
                </li>
            </ul>
            <h3>Idiomas</h3>
        </Wrapper>
    )
}