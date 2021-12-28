import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import Button from '../Button';

const ButtonLine = styled.div`
    display: flex;
    justify-content: center;
`

export default function PageTemplate(props) {
    return (
        <>
            <Header />
            <ButtonLine>
                <Button
                    name='Bio'
                    path='/' />
                <Button
                    name='Projetos'
                    path='/projects' />
                <Button
                    name='Experiência'
                    path='/experience' />
                <Button
                    name='Formação Acadêmica'
                    path='/education' />
                <Button
                    name='Cursos'
                    path='/courses' />
                <Button
                    name='Hobbies'
                    path='/hobbies' />
            </ButtonLine>
            {props.children}
            <Footer />
        </>
    )
}