import React from 'react'
import Header from '../../components/Header'
import { Contactform } from './component'
import styled from 'styled-components'

const S = {
    Wrapper: styled.div`
    width:100vw;
    height: 100vh;
    background:no-repeat center/cover url("https://images.unsplash.com/photo-1600025518136-a30b64a22d02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
    position:absolute;
    z-index:1;
    `,
    Cover: styled.div`
    width:100vw;
    height:100vh;
    background-color:black;
    opacity:0.5;
    position:absolute;
    z-index:2;
    `
}

const Contact = () => {
    return (
        <S.Wrapper>
            <S.Cover />
            <Header home={false} />
            <Contactform />
        </S.Wrapper>
    )
}

export default Contact