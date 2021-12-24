import React from 'react';
import Habilidades from '../FirstPageContent/Habilidades';
import Idiomas from '../FirstPageContent/Idiomas';
import Personalidade from '../FirstPageContent/Personalidade';
import './style.css';

export default function MainContent () {
    return(
        <section className='MainContent'>
            <Habilidades />
            <Personalidade />
            <Idiomas />

        </section>
    )
}