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
    @media (min-width: 320px) and (max-width: 480px) {
      padding:30px 0;
    }
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
    @media (min-width: 320px) and (max-width: 480px) {
      font-size:1.5rem;
    }
  `,
  SubTitle: styled.h3`
  ${props => props.theme.typography.heading};
  margin:20px 0;
  margin-bottom:40px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size:1.2rem;
    }
  `
  ,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
    /* margin-left:20px; */
    @media (min-width: 320px) and (max-width: 480px) {
      font-size:1rem;
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
    width: 400px;
    height: 400px;
    background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/profile.jpeg?alt=media&token=e0ab66cc-4252-4938-90e8-800da11720fa');
    @media (max-width:376px){
      display:none;
    }
  `,
  IntroRow: styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  `,
  ExpRow: styled.div`
  display:flex;
  flex-direction:column;
  /* margin-left:20px; */
  /* margin-right:20px; */
  `,
  Line: styled.div`
  width:100%;
  height:10px;
  border-bottom:1px solid ${props => props.theme.palette.gray};
  `,

  ExpTitle: styled.div`
  ${props => props.theme.typography.heading};
  color:${props => props.theme.palette.darkgray};
  text-decoration:underline 1px solid;
  text-underline-offset:20%;
  padding-bottom:20px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size:1.2rem;
    font-weight:600;
    }
  `,
  ExpDesc: styled.div`
  ${props => props.theme.typography.description};
  margin-bottom: 20px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size:1rem;
    }
  `,
  ExpSp: styled.div`
  display:grid;
  grid-template-columns:1fr 2fr;
  `,
  ExpCol: styled.div`
  display:flex;
  flex-direction:column;
  `,
  ColHeading: styled.div`
  ${props => props.theme.typography.subheading};
  font-weight:400;
  margin-bottom:15px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size:1rem;
    }
  `,
  ColPeriod: styled.div`
  ${props => props.theme.typography.subheading};
  font-weight:400;
  color:${props => props.theme.palette.gray};
  @media (min-width: 320px) and (max-width: 480px) {
    font-size:0.5rem;
    }
  `,
  Ul: styled.ul`
  list-style: inside;
  ${props => props.theme.typography.subheading};
  font-weight:400;
  `,
  Li: styled.li`
  padding:10px 0;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size:0.9rem;
    }
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
          <S.Description style={{ marginRight: 30 }}>
            Since beginning my journey as a web developer student about<br />
            2 years ago,I've done many projects in C, PHP and Javascript<br />
            in école 42.I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
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
        <S.Title>ABOUT ME</S.Title>
        <S.Description>
          Hello! I'm Jin. Currently, studying coding at école 42 Paris.<br />
          I have started my career as Marketing Export for 3 years in Seoul, South Korea and Frankfurt, Germany<br />
          However, I found myself loosing my passion for my job and my behavior has being became a passive person.<br />
          So, I dicided quitting the job to make further step.<br />
          <br />
          Studying in 42 curriculm which pushes studens to the limit, my problem solving
        </S.Description>
        <a style={{ margin: 30, marginTop: 10 }} href={`https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/Jin_Park__Web_Developer.pdf?alt=media&token=25891439-2c04-4f59-8f41-47f766bdb74d`} download rel="noreferrer" target="_blank">Download resume_English Ver.</a>
        <a style={{ margin: 30, marginTop: 10 }} href={`https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%8E%E1%85%A5%E1%86%AF.pdf?alt=media&token=324c469e-eb87-4b9e-a98f-778a87873d71`} download rel="noreferrer" target="_blank">Download resume_Korean Ver.</a>
      </S.IntroRow>
      <S.IntroRow>
        <S.Title>EXPERIENCE / ACTIVITY</S.Title>
        <S.SubTitle>Developer</S.SubTitle>
        <S.ExpRow style={{ marginBottom: 30 }}>
          <S.ExpTitle>Back 2 living room : 42 Hackathon</S.ExpTitle>
          <a href="https://backtothelivingroom.tech/" style={{ marginBottom: 30 }}>Link</a>
          <S.ExpSp>
            <S.ExpCol>
              <S.ColHeading>Winner</S.ColHeading>
              <S.ColPeriod>2021.02.05 - 07</S.ColPeriod>
            </S.ExpCol>
            <S.ExpCol>
              <S.Ul>
                <S.Li>Winner of Senior &#38; Technology</S.Li>
                <S.Li><a href="https://seojun-park.github.io/Back2LivingRoom_Hackathon/#/">See Demo</a></S.Li>
              </S.Ul>
            </S.ExpCol>
          </S.ExpSp>
        </S.ExpRow>
        <S.Line />
        <S.SubTitle>Marketing</S.SubTitle>
        <S.ExpRow style={{ marginBottom: 30 }}>
          <S.ExpTitle>E.Style.gmbh</S.ExpTitle>
          <S.ExpDesc>Marketing</S.ExpDesc>
          <S.ExpSp>
            <S.ExpCol>
              <S.ColHeading>Account Executive</S.ColHeading>
              <S.ColPeriod>2017.09 - 2018.03</S.ColPeriod>
            </S.ExpCol>
            <S.ExpCol>
              <S.Ul>
                <S.Li>2018 Russia World Cup OMBC proposal team</S.Li>
                <S.Li>Operated and organized company 10th anniversary</S.Li>
              </S.Ul>
            </S.ExpCol>
          </S.ExpSp>
        </S.ExpRow>
        <S.Line />
        <S.ExpRow style={{ marginTop: 30 }}>
          <S.ExpTitle>S.miles.co.ltd,.</S.ExpTitle>
          <S.ExpDesc>Marketing</S.ExpDesc>
          <S.ExpSp>
            <S.ExpCol>
              <S.ColHeading>Account Executive</S.ColHeading>
              <S.ColPeriod>2015.12 - 2017.07</S.ColPeriod>
            </S.ExpCol>
            <S.ExpCol>
              <S.Ul>
                <S.Li>IFC(International Finance Centre) mall in Seoul annual marketing operator</S.Li>
                <S.Li>Operated 2016 UNESCO-L'Oréal Woman in Science Awards</S.Li>
                <S.Li>Operated 2016 Medtronic 8th ATEP conference</S.Li>
              </S.Ul>
            </S.ExpCol>
          </S.ExpSp>
        </S.ExpRow>
      </S.IntroRow>
    </S.Wrapper>
  );
};

export default ProfileBody;
