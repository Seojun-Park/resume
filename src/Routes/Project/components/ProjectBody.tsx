import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
    Fillit,
    Libft,
    NQueen,
    Camagru,
    FtSSL,
    Uber,
    Jinstagram,
    Filler,
    SW,
    BK
} from '.'

interface IProps {
    data: {
        preview: string;
        thumbnail: string;
        description: string;
        label: string;
        title: string;
        images: any;
        repository
    }
}

interface IStyle {
    image: string
}

const S = {
    Wrapper: styled.div`
    padding:30px;
    padding-top:50px;
    min-height:100vh;
    background-color:white;
    /* text-align:center; */
    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
        padding:30px 0;
        margin:0 auto;
    }
    `,
    Title: styled.div`
    ${props => props.theme.typography.title};
    text-transform:uppercase;
    @media (min-width: 320px) and (max-width: 480px) {
    text-align:center;
        font-size:2rem;
    }
    `,
    Line: styled.div`
     width:7%;
     height:20px;
     border-bottom:2px solid black;
     margin-bottom: 30px;
     @media (min-width: 320px) and (max-width: 480px) {
         margin:0 auto;
         margin-bottom:30px;
         width:20%;
    }
     `,
    Overview: styled.div`
    width: 80%;
    margin:0 auto;
    padding: 15px;
    @media (min-width: 320px) and (max-width: 480px) {
        width:100%;
        padding:0;
    }
    `,
    Preview: styled.div<IStyle>`
    width: 80%;
    height: 400px;
    border-radius: 0.5rem 0.5rem 0 0 ;
    background: no-repeat center/cover url(${props => props.image});
    background-size:contain;
    margin:15px auto;
    @media (min-width: 320px) and (max-width: 480px) {
        width:300px;
        height:200px;
    }
    `,
    Content: styled.div`
    margin-top:35px;
    display:flex;
    flex-direction: column;
    padding-left:20px;
    @media (min-width: 320px) and (max-width: 480px) {
        padding:0;
    }

    `,
    Description: styled.span`
    ${props => props.theme.typography.description};
    width:80%;
    padding-top: 20px;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size:0.9rem;
    }
    `,
    Link: styled(Link)`
    /* padding:20px; */
    margin:20px;
    color:black;
    &:hover{
        transition:0.2s linear;
        color:${props => props.theme.palette.lightgray};
    }
    @media (min-width: 320px) and (max-width: 480px) {
        /* display:none; */
        margin:10px 0;
    }
    `
}

const Arrow = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>

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
            case 'filler':
                return <Filler data={data} />
            case 'SW Sunmoon':
                return <SW data={data} />
            case 'BK21':
                return <BK data={data} />
            default:
                return;
        }
    }
    return (
        <S.Wrapper>
            <S.Title>{data.title}</S.Title>
            <S.Line />
            <S.Link to="/projects" style={{ textDecoration: "none" }}><Arrow />{" "}BACK</S.Link>
            <S.Overview>
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