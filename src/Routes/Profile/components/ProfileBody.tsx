import React from 'react'
import styled from 'styled-components'

const S = {
    Wrapper: styled.div`
    margin-top: 400px;
    @media (max-width: 376px){
        margin-top: 250px;
    }
    `
}

const ProfileBody = () => {
    return (
        <S.Wrapper>
            lala
        </S.Wrapper>
    )
}

export default ProfileBody