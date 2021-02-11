import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Helmet from 'react-helmet'
import TopBanner from '../../components/TopBanner'
import styled from 'styled-components'
import { ProfileBody } from './components'

const Wrapper = styled.div`
    width: 100%;
    background-color:#F8F5F2;
    @media (max-width:376px){
        /* width: 100%; */
        width: 376px;
        background-color:#F8F5F2; 
    }
`

const Profile = () => {
    return (
        <Wrapper>
            <Helmet><title>Profile</title></Helmet>
            <Header home={false} />
            <TopBanner title='Profile' />
            <ProfileBody />
            <Footer />
        </Wrapper>
    )
}

export default Profile