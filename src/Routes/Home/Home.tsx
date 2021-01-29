import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Banner, Figure, AboutMe, Hero, Service, Contact, Works } from './components'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            {/* <Service /> */}
            <AboutMe />
            <Figure />
            <Banner />
            <Works />
            <Contact />
            <Footer />
        </>
    )
}

export default Home