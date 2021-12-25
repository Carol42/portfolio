import React from "react";
import '../../FirstPageContent/style.css';
import ProgressBar from "../ProgressBar";

import '../style.css';

export default function Habilidades() {
    return (
        <div className="habilidades-wrap">
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
        </div>
    )
}