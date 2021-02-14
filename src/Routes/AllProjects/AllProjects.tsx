import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ProjectBody } from './components'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    background-color:#F8F5F2;
    @media (min-width: 320px) and (max-width: 480px) {
        width:100%;
    }
`

const AllProjects = () => {
    return (
        <Wrapper>
            <Helmet><title>Projects</title></Helmet>
            <Header home={false} />
            <ProjectBody />
            <Footer />
        </Wrapper>
    )
}

export default AllProjects