import React from "react";
import '../../FirstPageContent/style.css';
import ProgressBar from "../ProgressBar";

export default function Idiomas() {
    return (
        <div className="idiomas-wrap">
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
        </div>
    )
}