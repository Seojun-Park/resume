import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom'

const S = {
  Background: styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 780px;
    background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/code1.jpeg?alt=media&token=bc4e1ebe-a18b-4b70-9e87-5bc124294797');
    z-index:0;
    @media (max-width: 376px){
      position: absolute;
    top: 0;
    /* width: 100%; */
    width: 375px;
    height: 500px;
    background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/code1.jpeg?alt=media&token=bc4e1ebe-a18b-4b70-9e87-5bc124294797');
    background-size:cover;
    z-index:0 
    }
  `,
  Cover: styled.div`
  position:absolute;
  top:0;
  width:100%;
  height: 780px;
  background-color:black;
  opacity:0.3;
  z-index: 1;
  @media (max-width: 376px){
    height: 500px;
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
  `,
  Title: styled.h1`
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
  Breadcrumb: styled.div`
  display: flex;
  flex-direction:row;
  ${props => props.theme.typography.subheading};
  color:white;
  `,
  Button: styled.div`
  &:not(:last-child){
    margin-right: 15px;
  }
  `,
  ExtendedLink: styled(Link)`
  text-decoration:none;
  color:white;
  &:hover{
    transition:0.2s linear;
    text-decoration:none;
    text-decoration-line:none;
    color:white;
    opacity:0.5;
  }
  `
};

const Hero = () => {
  return (
    <S.Background>
      <S.Cover />
      <S.Wrapper>
        <S.Title>
          Jin Park
          <br />
          Web Developer
        </S.Title>
        <S.Description>
          Hi! Jin 👋 <br />Currently, I'm studying web development in école 42, Paris<br />
          I code with passion and bring the idea to life.<br />
          Powered by VS Code and coffee
        </S.Description>
        <S.Breadcrumb>
          <S.Button><S.ExtendedLink to="/">Profile</S.ExtendedLink></S.Button> /
          <S.Button><S.ExtendedLink to="/projects">&emsp;Projects</S.ExtendedLink></S.Button> /
          <S.Button><S.ExtendedLink to="/">&emsp;Contact</S.ExtendedLink></S.Button>
        </S.Breadcrumb>
      </S.Wrapper>
    </S.Background>
  );
};

export default Hero;
