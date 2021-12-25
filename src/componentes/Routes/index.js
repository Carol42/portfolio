import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Education from "../../pages/Education";
import Experience from "../../pages/Experience";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Courses from "../../pages/Courses";
import Hobbies from "../../pages/Hobbies";


export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <Home /> } />
                <Route  path='/projects' element={ <Projects /> } />
                <Route  path='/education' element={ <Education /> } />
                <Route  path='/experience' element={ <Experience /> } />
                <Route  path='/courses' element={ <Courses /> } />
                <Route  path='/hobbies' element={ <Hobbies /> } />
            </Routes>
        </BrowserRouter>
    )
}