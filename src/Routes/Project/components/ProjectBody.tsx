import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Fillit, Libft, NQueen, Camagru, FtSSL, Uber, Jinstagram } from '.'

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
        margin-top: 200px;
    }
    `,
    Head: styled.div`
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    `,
    Title: styled.h4`
    ${props => props.theme.typography.subtitle};
    @media (max-width:376px){
        font-size:2rem;
    }
    `
    ,
    Overview: styled.div`
    width: 80%;
    margin:0 auto;
    padding: 15px;
    @media (max-width:376px){
        padding:8px;
    }
    `,
    Preview: styled.div<IStyle>`
    width: 80%;
    height: 400px;
    border-radius: 0.5rem 0.5rem 0 0 ;
    background: no-repeat center/cover url(${props => props.image});
    background-size:contain;
    margin:15px auto;
    @media (max-width:376px){
        height: 150px;
    }
    `,
    Content: styled.div`
    margin-top:35px;
    display:flex;
    flex-direction: column;
    padding-left:20px;
    @media (max-width:376px){
        padding-left:8px;
    }

    `,
    Description: styled.span`
    ${props => props.theme.typography.description};
    width:80%;
    padding-top: 20px;
    `,
    Link: styled(Link)`
    @media (max-width:376px){
        display:none;
    }
    `
}

const ProjectBody: React.FC<IProps> = ({ data }) => {
    const handlePresent = (title: string) => {
        switch (title) {
            case 'Fillit':
                return <Fillit data={data} />;
            case 'N-Queen':
                return <NQueen data={data} />;
            case 'libft':
                return <Libft data={data} />;
            case 'Camagru':
                return <Camagru data={data} />;
            case 'ft_SSL':
                return <FtSSL data={data} />;
            case 'Uber Clone':
                return <Uber data={data} />
            case 'Jinstagram':
                return <Jinstagram data={data} />
            default:
                return;
        }
    }
    return (
        <S.Wrapper>
            <S.Overview>
                <S.Head>
                    <S.Title>{data.title}</S.Title>
                    <S.Link to="/projects">Go back to project list</S.Link>
                </S.Head>
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