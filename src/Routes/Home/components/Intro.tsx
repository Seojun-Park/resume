import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 30px 0;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width:376px){
      padding: 60px auto;
      margin:auto;
      margin-top: 400px;
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
  color:${props => props.theme.palette.gray};
  font-size:1.2rem;
  `,
  InnerRow: styled.div`
  display:flex;
  flex-direction:row;
  margin-top:30px;
  `,
  Circle: styled.div`
  border:4px solid black;
  padding: 4px 15px;
  border-radius:5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
  ${props => props.theme.typography.description};
  &:hover{
    background-color:${props => props.theme.palette.primary};
    border:4px solid ${props => props.theme.palette.primary};
    transition:0.2s linear;
    color:white;
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
        Intro
      </S.Title>
      <S.Line />
      <S.SubTitle>
        About me
      </S.SubTitle>
      <S.Row>
        <S.Description>
          I'm lalala
        </S.Description>
        <S.InnerRow>
          <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>
            <S.Circle>More about me</S.Circle>
          </Link>
        </S.InnerRow>
      </S.Row>
      <S.SubTitle>
        Social Media
      </S.SubTitle>
      <S.Row>
        <S.Description>
          lala
        </S.Description>
        <S.InnerRow>
          {social.map((item, idx) => {
            return (
              <S.HyperLink key={idx} href={item.url} style={{ textDecoration: "none" }}>
                <S.Circle>
                  {item.sns}
                </S.Circle>
              </S.HyperLink>
            )
          })}
        </S.InnerRow>
      </S.Row>
    </S.Wrapper >
  );
};

export default Intro;
