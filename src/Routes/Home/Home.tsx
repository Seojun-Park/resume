import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Figure, AboutMe, Hero, Works } from './components'
import MoveTop from '../../components/MoveTop'

const S = {
    Wrapper: styled.div`
    width: 100%;
    background-color:#ffffff;
    @media (max-width:376px){
        /* width: 100%; */
        width: 376px;
        background-color:#ffffff; 
    }
    `
}

const Home = () => {
    return (
        <S.Wrapper>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
            <Hero />
            <AboutMe />
            <Figure />
            <Works />
            <MoveTop />
            {/* <Contact /> */}
            <Footer />
        </S.Wrapper>
    )
}

export default Home