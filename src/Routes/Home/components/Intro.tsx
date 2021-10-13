import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin:50px auto 50px auto;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    font-family: 'Montserrat', sans-serif;
    @media (min-width: 320px) and (max-width: 480px) {
      padding: 5px;
      margin:0 auto;
      margin-top: 50px;
      margin-bottom: 50px;;
    }
  `,
  Line: styled.div`
  width:7%;
  height:20px;
  border-bottom:2px solid black;
  @media (min-width: 320px) and (max-width: 480px) {
    width:20%;
    }
  `,
  Title: styled.div`
  ${props => props.theme.typography.title};
  `,
  SubTitle: styled.div`
  ${props => props.theme.typography.heading};
  font-weight:600;
  margin-top: 50px;
  `,
  Row: styled.div`
  margin-top:20px;
  `,
  Description: styled.div`
  ${props => props.theme.typography.heading};
  font-weight:400;
  font-size:1.2rem;
  font-family: "Archivo", sans-serif;
  text-align:center;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size:1rem;
    width:375px;
    }
  `,
  InnerRow: styled.div`
  display:flex;
  flex-direction:row;
  margin-top:30px;
  flex-wrap:wrap;
  @media (min-width: 320px) and (max-width: 480px) {
    }
  `,
  Circle: styled.div`
  border:4px solid ${props => props.theme.palette.primary};
  background-color:${props => props.theme.palette.primary};
  color:white;
  padding: 4px 15px;
  border-radius:5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
  ${props => props.theme.typography.description};
  &:hover{
    background-color:${props => props.theme.palette.hover};
    border:4px solid ${props => props.theme.palette.hover};
    transition:0.2s linear;
    color:white;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 4px 10px;
    font-size:10px;
    margin: 10px 0;
    }
  `,
  HyperLink: styled.a`
  text-decoration:none;
  color: ${props => props.theme.palette.darkgray};
  &:not(:last-child){
    margin-right:10px;
  }
  `
};

const social = [
  {
    sns: "LINKEDIN",
    url: "https://www.linkedin.com/in/jincheol-park-9b2b74148/"
  },
  {
    sns: "FACEBOOK",
    url: "https://www.facebook.com/jincheol.park.77"
  },
  {
    sns: "GITHUB",
    url: "https://github.com/Seojun-Park"
  }
]


const Intro = () => {
  return (
    <S.Wrapper className="aboutme">
      <S.Title>
        INTRO
      </S.Title>
      <S.Line />
      <S.SubTitle>
        ABOUT ME
      </S.SubTitle>
      <S.Row>
        <S.Description style={{ lineHeight: 1.5 }}>
          Hi! I'm Jin 👋 <br />
          Currently, I'm studying web development in école 42 Paris<br />
          I code with passion and bring the idea to life.<br />
          Powered by VS Code and coffee
        </S.Description>
      </S.Row>
      <S.Row>
        <S.InnerRow>
          {social.map((item, idx) => {
            return (
              <S.HyperLink key={idx} href={item.url} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                <S.Circle>
                  {item.sns}
                </S.Circle>
              </S.HyperLink>
            )
          })}
          <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>
            <S.Circle>ABOUT ME</S.Circle>
          </Link>
        </S.InnerRow>
      </S.Row>
    </S.Wrapper >
  );
};

export default Intro;
