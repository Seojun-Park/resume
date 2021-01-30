import React from 'react'
import styled from 'styled-components'

interface IProps {
    data: any
}

const S = {
    Wrapper: styled.div`
    margin-top: 400px;
    @media (max-width: 376px){
        margin-top: 250px;
    }
    `
}

const ProjectBody: React.FC<IProps> = ({ data }) => {
    console.log(data)
    return (
        <S.Wrapper>
            lal
        </S.Wrapper>
    )
}

export default ProjectBody