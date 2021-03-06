import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import TopBanner from '../../components/TopBanner'
import { RouteComponentProps } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { ProjectBody } from './components'
import { WORKS_ITEMS } from '../../components/AllProjects'
import styled from 'styled-components'
import MoveTop from '../../components/MoveTop'

interface IProps extends RouteComponentProps {
    match: any
}

const Wrapper = styled.div`
width: 100%;
background-color:#F8F5F2;
@media (min-width: 320px) and (max-width: 480px) {
    width:100%;
    }
`

const Project: React.FC<IProps> = ({ match }) => {
    const [data, setData] = useState<any>();
    const { params } = match

    useEffect(() => {
        const work = WORKS_ITEMS.find((item) => {
            if (item.title === params.title) {
                return true;
            }
            return false
        })
        if (work) {
            setData(work)
        }
    }, [params, setData])

    if (!data || !params) {
        return (
            <React.Fragment>
                loading...
            </React.Fragment>
        )
    }
    return (
        <Wrapper>
            <Helmet><title>Projects</title></Helmet>
            <Header home={false} />
            {/* <TopBanner title={data.title} /> */}
            <ProjectBody data={data} />
            <MoveTop />
            <Footer />
        </Wrapper>
    )
}

export default Project