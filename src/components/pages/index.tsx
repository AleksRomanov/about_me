import React from 'react';
import Teaser from '../Teaser/Teaser';
import About from "../About/About";
import Works from "../Works/Works";
import Skills from "../Skills/Skills";

function Index(): JSX.Element {
    return (
        <>
            <Teaser/>
            <About/>
            <Works/>
            <Skills/>
        </>
    );
}

export default Index;
