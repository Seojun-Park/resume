import React from 'react';
import styled from 'styled-components';
import useScrollClipPath from '../../../hooks/useScrollClipPath'


const S = {
  Wrapper: styled.section`
    width: 90%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    background-color:white;
  `,
  Row: styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  margin-bottom:50px;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 580px;
    @media (max-width:376px){
      display:none;
    }
  `,
  Label: styled.p`
    display: inline-block;
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
  SubTitle: styled.h3`
  ${props => props.theme.typography.heading};
  `
  ,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
    margin-left:20px;
    @media (max-width:376px){
      margin-top: 20px;
      background-color: white;
      width: 320px;
      padding: 1rem;
      margin-bottom:1rem;
    }
  `,
  List: styled.ul`
    width: fit-content;
    margin-bottom: 2rem;
  `,
  ListItem: styled.p`
    ${props => props.theme.typography.description};
    padding: 1rem 1rem 1rem 0;
    border-bottom: 1px solid ${props => props.theme.palette.lightgray};
    span {
      color: ${props => props.theme.palette.secondary};
    }
    @media (max-width:376px){
      font-size: 14px;
    }
  `,
  TextButton: styled.button`
    width: fit-content;
    ${props => props.theme.typography.textbutton};
    color: ${props => props.theme.palette.secondary};
    cursor: pointer;
  `,
  Image: styled.div`
    width: 500px;
    height: 500px;
    background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/profile.jpeg?alt=media&token=e0ab66cc-4252-4938-90e8-800da11720fa');
    @media (max-width:376px){
      display:none;
    }
  `,
  IntroRow: styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  `
};

const FEAURE_ITEMS = [
  `Frontend : React JS / JavaScript / TypeScript`,
  'Backend : Node JS / Graphql',
  'I genuinely care about people and love to collaborate with them',
];

const ProfileBody = () => {
  const animatedImage = {
    0: useScrollClipPath(),
    1: useScrollClipPath('down')
  }

  return (
    <S.Wrapper className="aboutme">
      <S.Row>
        <S.TextWrapper>
          <S.Title>
            Hi I'm Jin <br />
          Nice to meet you
        </S.Title>
          <S.Description>
            Since beginning my journey as a web developer student about 2 years ago,<br />
          I've done many projects in C, PHP and Javascript in école 42.<br />
          I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          {/* problem at a time. */}
          </S.Description>
          <S.List>
            {FEAURE_ITEMS.map((item, index) => (
              <S.ListItem key={item}>
                <span>•</span> {item}
              </S.ListItem>
            ))}
          </S.List>
        </S.TextWrapper>
        <S.Image {...animatedImage[0]} />
      </S.Row>
      <S.IntroRow>
        <S.Title>About me</S.Title>
        <S.Description>
          Hello! I'm Jin. Currently, studying coding at école 42 Paris.<br />
          I have started my career as Marketing Export for 3 years in Seoul, South Korea and Frankfurt, Germany<br />
          However, I found myself loosing my passion for my job and my behavior has being became a passive person.<br />
          So, I dicided quitting the job to make further step.<br />
          <br />
          Studying in 42 curriculm which pushes studens to the limit, my problem solving
        </S.Description>
      </S.IntroRow>
      <S.IntroRow>
        <S.Title>Work Experience</S.Title>
        <S.Description>
          Hello! I'm Jin. Currently, studying coding at école 42 Paris.<br />
          I have started my career as Marketing Export for 3 years in Seoul, South Korea and Frankfurt, Germany<br />
          However, I found myself loosing my passion for my job and my behavior has being became a passive person.<br />
          So, I dicided quitting the job to make further step.<br />
          <br />
          Studying in 42 curriculm which pushes studens to the limit, my problem solving
        </S.Description>
      </S.IntroRow>
      <a href={`https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/Resume_Jinpark.pdf?alt=media&token=c0305e79-ab37-4d73-98ba-2151196ceb61`} download rel="noreferrer" target="_blank">Download resume</a>
    </S.Wrapper>
  );
};

export default ProfileBody;
