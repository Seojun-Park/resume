import React from 'react'
import styled from 'styled-components'

interface IProps {
    data: {
        preview: string;
        description: string;
        label: string;
        title: string;
    }
}

interface IStyle {
    image: string
}

const S = {
    Wrapper: styled.div`
    margin-top: 400px;
    @media (max-width: 376px){
        margin-top: 250px;
    }
    `,
    Title: styled.h3`
    ${props => props.theme.typography.title};
    color:black;
    margin-bottom: 0.5rem;
    @media (max-width: 376px){
        font-size: 28px;
    }
    `,
    Preview: styled.div<IStyle>`
    width: 80%;
    height: 400px;
    border-radius: 0.5rem 0.5rem 0 0 ;
    border-bottom: 1px solid #333;
    background: no-repeat center/cover url(${props => props.image});
    margin:15px auto;
    `
}

const ProjectBody: React.FC<IProps> = ({ data }) => {
    return (
        <S.Wrapper>
            <S.Title>Overview</S.Title>
            <S.Preview image={data.preview} />
        </S.Wrapper>
    )
}

export default ProjectBody