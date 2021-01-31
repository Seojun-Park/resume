import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ProjectBody, TopBanner } from './components'
import { Helmet } from 'react-helmet'

const AllProjects = () => {
    return (
        <React.Fragment>
            <Helmet><title>Projects</title></Helmet>
            <Header />
            <TopBanner title="Projects" />
            <ProjectBody />
            <Footer />
        </React.Fragment>
    )
}

export default AllProjects