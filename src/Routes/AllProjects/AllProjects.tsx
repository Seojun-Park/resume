import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ProjectBody } from './components'
import { Helmet } from 'react-helmet'
import TopBanner from '../../components/TopBanner'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    background-color:#F8F5F2;
    @media (max-width:376px){
        /* width: 100%; */
        width: 376px;
        background-color:#F8F5F2; 
    }
`

const AllProjects = () => {
    return (
        <Wrapper>
            <Helmet><title>Projects</title></Helmet>
            <Header home={false} />
            {/* <TopBanner title="Projects" /> */}
            <ProjectBody />
            <Footer />
        </Wrapper>
    )
}

export default AllProjects