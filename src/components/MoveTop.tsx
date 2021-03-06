import React from 'react';
import styled from 'styled-components'

const S = {
    Container: styled.div`
    width: 70%;
    display:flex;
    margin:0 auto;
    justify-content:flex-end;
    margin-top: 40px;
    `,
    Button: styled.button`
    width: 100%;
    padding: 12px;
    background-color:#ffffff;
    border:1px solid ${props => props.theme.palette.primary};
    border-radius:1rem;
    color:${props => props.theme.palette.primary};
    ${props => props.theme.typography.button};
    /* font-size: 1rem; */
    &:hover{
        transition:0.2s linear;
        color:white;
        background-color: ${props => props.theme.palette.hover};
        border: 1px solid ${props => props.theme.palette.hover};
    }
    `
}

const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#0063FF"
        >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>
    )
}

const MoveTop = () => {
    const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" })
    return (
        <S.Container>
            <S.Button onClick={handleClick}>Move to Top&nbsp;&nbsp;&nbsp;&nbsp;<Arrow /></S.Button>
        </S.Container>
    )
}

export default MoveTop