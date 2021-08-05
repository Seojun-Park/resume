import React from 'react';
import useScrollClipPath from '../../../hooks/useScrollClipPath'
import { ProfileStyle } from '../ProfileStyle'


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
    <ProfileStyle.Wrapper className="aboutme">
      <ProfileStyle.Row>
        <ProfileStyle.TextWrapper>
          <ProfileStyle.Title>
            Hi I'm Jin <br />
          Nice to meet you
        </ProfileStyle.Title>
          <ProfileStyle.Description style={{ marginRight: 30 }}>
            Since beginning my journey as a web developer student about<br />
            2 years ago,I've done many projects in C, PHP and Javascript<br />
            in école 42.I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
          {/* problem at a time. */}
          </ProfileStyle.Description>
          <ProfileStyle.List>
            {FEAURE_ITEMS.map((item, index) => (
              <ProfileStyle.ListItem key={item}>
                <span>•</span> {item}
              </ProfileStyle.ListItem>
            ))}
          </ProfileStyle.List>
        </ProfileStyle.TextWrapper>
        <ProfileStyle.Image {...animatedImage[0]} />
      </ProfileStyle.Row>
      <ProfileStyle.IntroRow>
        <ProfileStyle.Title>ABOUT ME</ProfileStyle.Title>
        <ProfileStyle.Description>
          Hello! I'm Jin. Currently, studying coding at école 42 Paris.<br />
          I have started my career as Marketing Export for 3 years in Seoul, South Korea and Frankfurt, Germany<br />
          However, I found myself loosing my passion for my job and my behavior has being became a passive person.<br />
          So, I dicided quitting the job to make further step.<br />
          <br />
          Studying in 42 curriculm which pushes studens to the limit, my problem solving
        </ProfileStyle.Description>
        <a style={{ margin: 30, marginTop: 10 }} href={`https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/Jin_Park__Web_Developer.pdf?alt=media&token=25891439-2c04-4f59-8f41-47f766bdb74d`} download rel="noreferrer" target="_blank">Download resume_English Ver.</a>
        <a style={{ margin: 30, marginTop: 10 }} href={`https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%8E%E1%85%A5%E1%86%AF.pdf?alt=media&token=324c469e-eb87-4b9e-a98f-778a87873d71`} download rel="noreferrer" target="_blank">Download resume_Korean Ver.</a>
      </ProfileStyle.IntroRow>
      <ProfileStyle.IntroRow>
        <ProfileStyle.Title>EXPERIENCE / ACTIVITY</ProfileStyle.Title>
        <ProfileStyle.SubTitle>Developer</ProfileStyle.SubTitle>
        <ProfileStyle.ExpRow style={{ marginBottom: 30 }}>
          <ProfileStyle.ExpTitle>Rapidle</ProfileStyle.ExpTitle>
          <ProfileStyle.ExpSp>
            <ProfileStyle.ExpCol>
              <ProfileStyle.ColHeading>Intern</ProfileStyle.ColHeading>
              <ProfileStyle.ColPeriod>2021.Apr - 2021.Jul</ProfileStyle.ColPeriod>
            </ProfileStyle.ExpCol>
            <ProfileStyle.ExpCol>
              <ProfileStyle.Ul>
                <ProfileStyle.Li>Worked on a GraphQL API and on various JS frameworks(React, React NativeAngular) for the Front part</ProfileStyle.Li>
                <ProfileStyle.Li>Evaluating and maintaining a mobile application(Rapidle Manager) on React Native</ProfileStyle.Li>
              </ProfileStyle.Ul>
            </ProfileStyle.ExpCol>
          </ProfileStyle.ExpSp>
          <ProfileStyle.Line />
        </ProfileStyle.ExpRow>
        <ProfileStyle.ExpRow style={{ marginBottom: 30 }}>
          <ProfileStyle.ExpTitle>Freelancer</ProfileStyle.ExpTitle>
          <ProfileStyle.ExpSp>
            <ProfileStyle.ExpCol>
              <ProfileStyle.ColHeading>Sunmoon Univ.<br /> Software Institue Webpage</ProfileStyle.ColHeading>
              <ProfileStyle.ColPeriod>2021.Feb - 2021.Apr</ProfileStyle.ColPeriod>
            </ProfileStyle.ExpCol>
            <ProfileStyle.ExpCol>
              <ProfileStyle.Ul>
                <ProfileStyle.Li>Full stack development(Mainly NodeJS/React)</ProfileStyle.Li>
                <ProfileStyle.Li>Real time facility reservation system</ProfileStyle.Li>
                <ProfileStyle.Li>Created CMS(Contents Management System, CRUD)system</ProfileStyle.Li>
                <ProfileStyle.Li>Login with jwt token</ProfileStyle.Li>
                <ProfileStyle.Li>Managed several categorized boards</ProfileStyle.Li>
                <ProfileStyle.Li>Interactive CSS design depending on device(Web / Mobile) by styled-components</ProfileStyle.Li>
                <ProfileStyle.Li><a href="https://sw.sunmoon.ac.kr/" target="_blank" rel="noreferrer">Webpage Link</a></ProfileStyle.Li>
              </ProfileStyle.Ul>
            </ProfileStyle.ExpCol>
          </ProfileStyle.ExpSp>
          <ProfileStyle.Line />

          <ProfileStyle.ExpSp style={{ marginTop: 15 }}>
            <ProfileStyle.ExpCol>
              <ProfileStyle.ColHeading>Sunmoon Univ.<br /> BK21 Program Webpage</ProfileStyle.ColHeading>
              <ProfileStyle.ColPeriod>2021.Jan - 2021.Feb</ProfileStyle.ColPeriod>
            </ProfileStyle.ExpCol>
            <ProfileStyle.ExpCol>
              <ProfileStyle.Ul>
                <ProfileStyle.Li>Full stack development(Mainly NodeJS/React)</ProfileStyle.Li>
                <ProfileStyle.Li>Created CMS(Contents Management System, CRUD)system</ProfileStyle.Li>
                <ProfileStyle.Li>Interactive CSS design depending on device(Web / Mobile) by styled-components</ProfileStyle.Li>
                <ProfileStyle.Li><a href="https://bk21edu.sunmoon.ac.kr/" target="_blank" rel="noreferrer">Webpage Link</a></ProfileStyle.Li>
              </ProfileStyle.Ul>
            </ProfileStyle.ExpCol>
          </ProfileStyle.ExpSp>
          <ProfileStyle.Line />
        </ProfileStyle.ExpRow>
        <ProfileStyle.ExpRow style={{ marginBottom: 30 }}>
          <ProfileStyle.ExpTitle>Back 2 living room : 42 Hackathon</ProfileStyle.ExpTitle>
          <a href="https://backtothelivingroom.tech/" style={{ marginBottom: 30 }}>Link</a>
          <ProfileStyle.ExpSp>
            <ProfileStyle.ExpCol>
              <ProfileStyle.ColHeading>Winner</ProfileStyle.ColHeading>
              <ProfileStyle.ColPeriod>2021.Feb.05 - 07</ProfileStyle.ColPeriod>
            </ProfileStyle.ExpCol>
            <ProfileStyle.ExpCol>
              <ProfileStyle.Ul>
                <ProfileStyle.Li>Winner in Senior &#38; Technology part</ProfileStyle.Li>
                <ProfileStyle.Li><a href="https://seojun-park.github.io/Back2LivingRoom_Hackathon/#/">See Demo</a></ProfileStyle.Li>
              </ProfileStyle.Ul>
            </ProfileStyle.ExpCol>
          </ProfileStyle.ExpSp>
        </ProfileStyle.ExpRow>
        <ProfileStyle.Line />
        <ProfileStyle.SubTitle>Marketing</ProfileStyle.SubTitle>
        <ProfileStyle.ExpRow style={{ marginBottom: 30 }}>
          <ProfileStyle.ExpTitle>E.Style.gmbh</ProfileStyle.ExpTitle>
          <ProfileStyle.ExpDesc>Marketing</ProfileStyle.ExpDesc>
          <ProfileStyle.ExpSp>
            <ProfileStyle.ExpCol>
              <ProfileStyle.ColHeading>Account Executive</ProfileStyle.ColHeading>
              <ProfileStyle.ColPeriod>2017.Sep - 2018.Mar</ProfileStyle.ColPeriod>
            </ProfileStyle.ExpCol>
            <ProfileStyle.ExpCol>
              <ProfileStyle.Ul>
                <ProfileStyle.Li>2018 Russia World Cup OMBC proposal team</ProfileStyle.Li>
                <ProfileStyle.Li>Operated and organized company 10th anniversary</ProfileStyle.Li>
              </ProfileStyle.Ul>
            </ProfileStyle.ExpCol>
          </ProfileStyle.ExpSp>
        </ProfileStyle.ExpRow>
        <ProfileStyle.Line />
        <ProfileStyle.ExpRow style={{ marginTop: 30 }}>
          <ProfileStyle.ExpTitle>S-miles.co.ltd,.</ProfileStyle.ExpTitle>
          <ProfileStyle.ExpDesc>Marketing</ProfileStyle.ExpDesc>
          <ProfileStyle.ExpSp>
            <ProfileStyle.ExpCol>
              <ProfileStyle.ColHeading>Account Executive</ProfileStyle.ColHeading>
              <ProfileStyle.ColPeriod>2015.Dec - 2017.Jul</ProfileStyle.ColPeriod>
            </ProfileStyle.ExpCol>
            <ProfileStyle.ExpCol>
              <ProfileStyle.Ul>
                <ProfileStyle.Li>IFC(International Finance Centre) mall in Seoul annual marketing operator</ProfileStyle.Li>
                <ProfileStyle.Li>Operated 2016 UNESCO-L'Oréal Woman in Science Awards</ProfileStyle.Li>
                <ProfileStyle.Li>Operated 2016 Medtronic 8th ATEP conference</ProfileStyle.Li>
              </ProfileStyle.Ul>
            </ProfileStyle.ExpCol>
          </ProfileStyle.ExpSp>
        </ProfileStyle.ExpRow>
      </ProfileStyle.IntroRow>
    </ProfileStyle.Wrapper>
  );
};

export default ProfileBody;
