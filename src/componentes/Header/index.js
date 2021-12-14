import React from 'react';
import SocialLinks from '../SocialLinks';
import './style.css';

export default function Header() {
    return (
        <header>
            <a href='https://myoctocat.com/' rel='noreferrer noopener' target='_blank' title='create your own octocat'>
                <img src='assets/octocat-profile.png' alt='avatar do perfil' className='foto-perfil' />
            </a>
            <div className='header-bio'>
                <h1 className='bio-title'>Caroline Heloíse de Oliveira</h1>
                <div className='bio-content'>
                    <p>Acadêmica de Engenharia de Computação pela UEPG</p>
                    <p>Acadêmica de Análise e Desenvolvimento de Sistemas pela UNOPAR</p>
                    <p>Atuou como professora de Inglês para crianças e adolescentes</p>
                    <p>Desenvolvedora web Front-end</p>
                </div>
                <div className="bio-links">
                    <SocialLinks />
                </div>
            </div>
        </header>
    )
}