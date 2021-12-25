import React from 'react';
import './style.css';

export default function MainContent (props) {
    return(
        <section className='MainContent'>
            {props.children}
        </section>
    )
}