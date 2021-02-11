import React from 'react'
import styled from 'styled-components'

interface IProps {
  title?: string;
}

// const bgImage = [
//   {
//     title: "profile",
//     image: ""
//   }, {
//     title: "project",
//     image: ""
//   },{
//     title:"contact",
//     image:""
//   }
// ]

const S = {
  Background: styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 400px;
    background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/project.jpeg?alt=media&token=d4d2f442-e9bf-49c3-b4ae-0b4b84789ca0');
    z-index:0;
    @media (max-width: 376px){
      position: absolute;
    top: 0;
    /* width: 100%; */
    width: 375px;
    height: 250px;
    background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/project.jpeg?alt=media&token=d4d2f442-e9bf-49c3-b4ae-0b4b84789ca0');
    background-size:cover;
    z-index:0 
    }
  `,
  Cover: styled.div`
  position:absolute;
  top:0;
  width:100%;
  height: 400px;
  background-color:black;
  opacity:0.3;
  z-index: 1;
  @media (max-width: 376px){
    height: 250px;
  }
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    padding-top: 100px;
    padding-left: 30px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position:absolute;
    z-index:2;
    @media (max-width: 376px){
      padding-top: 50px;
    }
  `, Title: styled.h1`
    ${props => props.theme.typography.title};
    color: #fff;
    margin-bottom: 0.5rem;
    @media (max-width: 376px){
      font-size: 28px;
    }
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.white};
    margin-bottom: 2rem;
  `,
}

const TobBanner: React.FC<IProps> = ({ title }) => {
  return (
    <S.Background>
      <S.Cover />
      <S.Wrapper>
        <S.Title>
          {title}
        </S.Title>
      </S.Wrapper>
    </S.Background>
  )
}

export default TobBanner