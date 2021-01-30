import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { RouteComponentProps } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { TopBanner, ProjectBody } from './components'

interface IProps extends RouteComponentProps {
    match: any
}

const WORKS_ITEMS = [
    {
        Preview: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/up.gif?alt=media&token=6e6b56c0-9097-46fb-b720-96b57ae93ec4',
        title: 'Uber Clone',
        label: 'Dec, 2020',
        description:
            'blabla ',
    }
];

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

    console.log(data)
    if (!data || !params) {
        return (
            <React.Fragment>
                loading...
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <Helmet><title>Projects</title></Helmet>
            <Header />
            <TopBanner title={data.title} />
            <ProjectBody data={data} />
            <Footer />
        </React.Fragment>
    )
}

export default Project