import React from 'react'
import Header from '../../components/Header'
import { Contactform } from './component'
import styled from 'styled-components'

const S = {
    Wrapper: styled.div`
    width:100vw;
    height: 100vh;
    background-color: ${props => props.theme.palette.primary};
    position:absolute;
    z-index:1;
    `,
}

const Contact = () => {
    return (
        <S.Wrapper>
            <Header home={false} />
            <Contactform />
        </S.Wrapper>
    )
}

export default Contact