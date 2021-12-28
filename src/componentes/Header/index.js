import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../SocialLinks';
import Border from '../../img/border-1.svg';

const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: .5fr 1.5fr;
    margin-bottom: 3em;
`

const Photo = styled.img`
    width: 80%;
    height: auto;
    rotate: -20deg;
`
const Bio = styled.div`
    display: grid;
    grid-template-rows: .9fr 1fr .1fr;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 3.5em 3.5em 0 0;
    border-image-slice: 35 35 35 35;
    border-image-source: url(${Border});
    border-image-width: 50px 50px 50px 50px;
`
const Title = styled.h1`
    text-align: center;
    align-self: center;
    grid-area: 1/ 1/ span 1 / span 3;
`
const Resume = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 3em;
    grid-area: 2 / 1/ span 1 / span 3;
`
const StyledLinks = styled.div`
    margin-bottom: .5em;
    grid-area: 3 / 2 / span 1 / span 1;
    text-align: center;
`

export default function Header() {
    return (
        <StyledHeader>
            <div>
                <Photo src='assets/octocat-profile-pic.png' alt='avatar do perfil' className='foto-perfil' />
                <a href='https://myoctocat.com/' rel='noreferrer noopener' target='_blank' title='create your own octocat'>
                </a>
            </div>
            <Bio>
                <Title>Caroline Heloíse de Oliveira</Title>
                <Resume>
                    <p>Acadêmica de Engenharia de Computação na UEPG</p>
                    <p>Acadêmica de Análise e Desenvolvimento de Sistemas na UNOPAR</p>
                    <p>Atuou como professora de Inglês para crianças e adolescentes</p>
                    <p>Desenvolvedora web Front-end</p>
                </Resume>
                <StyledLinks>
                    <SocialLinks />
                </StyledLinks>
            </Bio>
        </StyledHeader>
    )
}