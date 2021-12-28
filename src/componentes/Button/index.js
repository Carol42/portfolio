import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from '../../img/fundo-botao.jpeg';

const  StyledLink = styled(Link)`
    border-radius: 12px;
    padding: .6em 1.5em;
    margin: auto 1em;
    background-image: url(${Img});
    background-position: right;
    box-shadow: 5px 5px 12px #222;
    text-decoration: none;
    font-size: 1.1em;
    color: #222;
    font-weight: 600;
`

export default function Button(props){
    return(
            <StyledLink className='button-link' to={ props.path } >{ props.name }</StyledLink>
          
    )
}