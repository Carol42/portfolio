import React from 'react';
import './style.css';

export default function Header(){
    return(
        <header>
            <img src='assets/octocat-profile.png' alt='foto de perfil' className='foto-perfil' />
            <div className='header-bio'>
                <h1 className='bio-title'>Caroline Heloíse de Oliveira</h1>
                <div className='bio-content'>
                    <p>Acadêmica de Engenharia de Computação pela UEPG</p>
                    <p>Acadêmica de Análise e Desenvolvimento de Sistemas pela UNOPAR</p>
                    <p>Atuou como professora de Inglês para crianças e adolescentes</p>
                    <p>Desenvolvedora web Front-end</p>
                </div>
            </div>
            <div className='header-links'>

            </div>
        </header>
    )
}