import React, { useRef } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Figure, Intro, Hero, Works, Contact } from './components'
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
    const ref = useRef<HTMLDivElement>(null)

    return (
        <S.Wrapper ref={ref}>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header homeref={ref} home={true} />
            <Hero />
            <Intro />
            {/* <Figure /> */}
            <Works />
            <Contact />
            <MoveTop />
            <Footer />
        </S.Wrapper>
    )
}

export default Home