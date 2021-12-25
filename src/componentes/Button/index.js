import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Button(props){
    return(
        <div className='button'>
            <Link className='button-link' to={ props.path } >{ props.name }</Link>
        </div>
    )
}