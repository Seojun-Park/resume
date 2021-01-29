import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';

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
        <Button fill="solid" type="button">
          See my profile
        </Button>
      </S.Wrapper>
    </S.Background>
  );
};

export default Hero;
