import React from "react";
import Wrapper from "../../Wrapper";
import ProgressBar from "../ProgressBar";
import Borda from '../../../img/borda-1.svg';

import '../style.css';

export default function Habilidades() {
    return (
        <Wrapper slice="60" row_end="span 3" src={Borda}>
            <ul>
                <li>HTML
                    <ProgressBar width="85%" />
                </li>
                <li>CSS
                    <ProgressBar width="75%" />
                </li>
                <li>JavaScript
                    <ProgressBar width="45%" />
                </li>
                <li>ReactJS
                    <ProgressBar width="65%" />
                </li>
                <li>Git
                    <ProgressBar width="25%" />
                </li>
            </ul>
            <h3>Habilidades</h3>
            </Wrapper>
        )
}