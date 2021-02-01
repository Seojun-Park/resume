import React from 'react'
import styled from 'styled-components'
import { Fillit, NQueen } from '.'

interface IProps {
    data: {
        preview: string;
        thumbnail: string;
        description: string;
        label: string;
        title: string;
        images: any;
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
    width: 80%;
    margin:0 auto;
    padding: 15px;
    `,
    Preview: styled.div<IStyle>`
    width: 80%;
    height: 400px;
    border-radius: 0.5rem 0.5rem 0 0 ;
    border-bottom: 1px solid #333;
    background: no-repeat center/cover url(${props => props.image});
    background-size:contain;
    margin:15px auto;
    `,
    Content: styled.div`
    margin-top:35px;
    display:flex;
    flex-direction: column;
    padding-left:20px;

    `,
    Description: styled.span`
    ${props => props.theme.typography.description};
    width:80%;
    padding-top: 20px;
    `
}

const ProjectBody: React.FC<IProps> = ({ data }) => {
    const handlePresent = (title: string) => {
        switch (title) {
            case 'Fillit':
                return <Fillit data={data} />;
            case 'N-Queen':
                return <NQueen data={data} />;
            default:
                return;
        }
    }
    console.log(data)
    return (
        <S.Wrapper>
            <S.Overview>
                <S.Title>{data.title}</S.Title>
                <S.Preview image={data.preview} />
                <S.Description>{data.description}</S.Description>
            </S.Overview>
            <S.Content>
                {handlePresent(data.title)}
            </S.Content>
        </S.Wrapper>
    )
}

export default ProjectBody