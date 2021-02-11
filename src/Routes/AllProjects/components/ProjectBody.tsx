import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { WORKS_ITEMS } from '../../../components/AllProjects'

interface IProps {
    preview: string;
}

const Nested = styled.div`
display:none;
text-decoration:none;
`;

const S = {
    Wrapper: styled.div`
    padding:30px;
    padding-top:50px;
    min-height:100vh;
    background-color:white;
    @media (max-width: 376px){
        margin-top: 250px;
    }
    `,
    Line: styled.div`
   width:7%;
   height:20px;
   border-bottom:2px solid black;
   `,
    Title: styled.div`
   ${props => props.theme.typography.title};
   `,
    Container: styled.div`
    width: 80%;
    min-height:50vh;
    margin:50px auto;
    /* background-color:white; */
    display:grid;
    padding-top: 35px;
    padding-bottom: 35px;
    grid-template-columns:repeat(3, 30%);
    grid-template-rows:230px;
    grid-auto-rows: 230px;
    justify-content:space-around;
    @media (max-width:376px){
        width:95%;
        grid-template-columns:repeat(2, 40%);
        grid-template-rows:150px;
        grid-auto-rows:150px;
    }
    `,
    Project: styled(Link) <IProps>`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:1rem;
    margin-bottom: 25px;
    text-decoration:none;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
    background: no-repeat center/cover url(${props => props.preview});
    &:hover{
        text-decoration:none;
        background:none;
        ${Nested}{
            &:hover{
                background-color:${props => props.theme.palette.primary};
                transition:0.2s linear;
            }
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height: 100%;
        border-radius: 1rem;
        transition:0.2s linear;
        }
    }
    `,
    ProjectTitleBox: styled.div`
    border: 3px solid white;
    padding: 15px;
    padding-top: 25px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    `,
    ProjectTitle: styled.span`
     font-weight:600;
    color:white;
    font-size:2rem;
    `
}

const ProjectBody = () => {
    return (
        <S.Wrapper className="projects">
            <S.Title>Project List</S.Title>
            <S.Line />
            <S.Container>
                {WORKS_ITEMS.map((item, index) => {
                    return (
                        <S.Project key={index} to={`/project/${item.title}`} preview={item.preview}>
                            <Nested>
                                <S.ProjectTitleBox>
                                    <S.ProjectTitle>
                                        {item.title}
                                    </S.ProjectTitle>
                                </S.ProjectTitleBox>
                            </Nested>
                        </S.Project>
                    )
                })}
            </S.Container>
        </S.Wrapper>
    )
}

export default ProjectBody