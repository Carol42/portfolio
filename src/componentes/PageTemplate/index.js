import Header from '../Header';
import Footer from '../Footer';
import Button from '../Button';

import './style.css';

export default function PageTemplate(props) {
    return (
        <>
            <Header />
            <div className='button-line'>
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
            </div>
            {props.children}
            <Footer />
        </>
    )
}