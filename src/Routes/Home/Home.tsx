import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Figure, AboutMe, Hero, Contact, Works } from './components'

const S = {
    Wrapper: styled.div`
    width: 100%;
    background-color:#F8F5F2;
    @media (max-width:376px){
        /* width: 100%; */
        width: 376px;
        background-color:#F8F5F2; 
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
            {/* <Service /> */}
            <AboutMe />
            <Figure />
            {/* <Banner /> */}
            <Works />
            <Contact />
            <Footer />
        </S.Wrapper>
    )
}

export default Home