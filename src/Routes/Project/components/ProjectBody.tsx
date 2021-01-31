import React from 'react'
import styled from 'styled-components'

interface IProps {
    data: {
        image: string;
        thumbnail: string;
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
    Title: styled.h4`
    ${props => props.theme.typography.subtitle};
    `
    ,
    Overview: styled.div`
    padding: 15px;
    `,
    Preview: styled.div<IStyle>`
    width: 80%;
    height: 400px;
    border-radius: 0.5rem 0.5rem 0 0 ;
    border-bottom: 1px solid #333;
    background: no-repeat center/cover url(${props => props.image});
    margin:15px auto;
    `,
    Content: styled.div`
    margin-top:35px;
    `,
    Description: styled.span`
    ${props => props.theme.typography.description};
    width:80%;
    padding: 20px;
    `
}

const ProjectBody: React.FC<IProps> = ({ data }) => {
    return (
        <S.Wrapper>
            <S.Overview>
                <S.Title>Overview</S.Title>
                <S.Preview image={data.image} />
                <S.Description>lalala</S.Description>
            </S.Overview>
            <S.Content>
                <S.Title>Content</S.Title>

            </S.Content>
        </S.Wrapper>
    )
}

export default ProjectBody