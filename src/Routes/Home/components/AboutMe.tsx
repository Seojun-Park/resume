import React from 'react';
import styled from 'styled-components';
import useScrollClipPath from '../../../hooks/useScrollClipPath'

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    padding-left: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 680px;
    @media (max-width:376px){
      padding: 60px auto;
      margin:auto;
      margin-top: 680px;
    }
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
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
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
    width: 580px;
    height: 580px;
    background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/profile.jpeg?alt=media&token=e0ab66cc-4252-4938-90e8-800da11720fa');
    @media (max-width:376px){
      display:none;
    }
  `,
  MobileWrapper: styled.div`
   @media (max-width:376px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 376px; 
    }
  `,
  MobileImage: styled.div`
  @media (max-width:376px){
  width: 320px;
    height: 320px;
    background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/profile.jpeg?alt=media&token=e0ab66cc-4252-4938-90e8-800da11720fa');
   }
  `
};

const FEAURE_ITEMS = [
  `Frontend : ReactJS / JavaScript / TypeScript`,
  'Backend : NodeJS / Graphql',
  'I genuinely care about people and love to collaborate with them',
];

const Feature = () => {
  const animatedImage = useScrollClipPath();

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Label>About Me</S.Label>
        <S.Title>
          Hi I'm Jin <br />
          Nice to meet you
        </S.Title>
        <S.Description>
          Since beginning my journey as a web developer student nearly 2 years ago,<br />
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
        <S.TextButton>Read more about me</S.TextButton>
      </S.TextWrapper>
      <S.Image {...animatedImage} />
      <S.MobileWrapper>
        <S.MobileImage {...animatedImage} />
        <S.Description>
          Since beginning my journey as a web developer student nearly 2 years ago,<br />
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
        <S.TextButton>Read more about me</S.TextButton>

      </S.MobileWrapper>
    </S.Wrapper>
  );
};

export default Feature;
