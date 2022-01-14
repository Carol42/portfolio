import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from '../../img/button-bg.jpeg';

const  StyledLink = styled(Link)`
    border-radius: 12px;
    padding: .3em 1.5em;
    margin: auto 1em;
    background-image: url(${Img});
    background-position: right;
    box-shadow: 5px 5px 10px #333;
    text-decoration: none;
    color: #222;
    font-weight: 400;
    font-family: 'The-Artisan-Marker', serif;
`

export default function Button(props){
    return(
            <StyledLink className='button-link' to={ props.path } >{ props.name }</StyledLink>
          
    )
}