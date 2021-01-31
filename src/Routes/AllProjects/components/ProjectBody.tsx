import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { WORKS_ITEMS } from '../../../components/AllProjects'

const Nested = styled.div`
display:none;
`

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
    margin-left: 20px;
    @media (max-width: 376px){
        font-size: 28px;
    }
    `,
    Container: styled.div`
    width: 80%;
    height: 70vh;
    min-height:50vh;
    margin:0 auto;
    background-color:white;
    display:grid;
    padding-top: 35px;
    padding-bottom: 35px;
    grid-template-columns:repeat(3, 30%);
    grid-template-rows:230px;
    grid-auto-rows: 230px;
    justify-content:space-around;
    `,
    Project: styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:1rem;
    margin-bottom: 25px;
    text-decoration:none;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
    &:hover{
        transition:0.2s linear;
        background-color:gray;
        ${Nested}{
            display:block;
            
        }
    }
    `,
}

const ProjectBody = () => {
    return (
        <S.Wrapper>
            <S.Title>List</S.Title>
            <S.Container>
                {WORKS_ITEMS.map((item, index) => {
                    return (
                        <S.Project key={index} to={`/project/${item.title}`}>
                            <Nested>
                                {item.title}
                            </Nested>
                        </S.Project>
                    )
                })}
            </S.Container>
        </S.Wrapper>
    )
}

export default ProjectBody