import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IStyle {
  image: string
}

const S = {
  Wrapper: styled.div`
     width: 100%;
    margin: auto;
    padding: 30px 0;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color:#EFF2F5;
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
  Row: styled.div`
  margin:0 auto;
   margin-top:30px;
   /* padding:0 10px; */
   min-width:1100px;
   display:grid;
   grid-template-columns:repeat(2, 45%);
   grid-template-rows:50%;
   grid-auto-rows:50%;
   justify-content:center;
   align-items:center;
   /* justify-content:space-between; */
   /* align-items:space-around; */
   padding-right:30px;
   `,
  Description: styled.div`
   ${props => props.theme.typography.heading};
   color:${props => props.theme.palette.gray};
   font-size:1.2rem;
   `,
  Card: styled.div`
  width:100%;
  height: 600px;
  max-width: 600px;
  min-width:500px;
  display:flex;
  flex-direction:column;
  margin-top:40px;
  cursor: pointer;
  &:hover{
    transition:0.2s linear;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  }
  `,
  Preview: styled.div<IStyle>`
  background: no-repeat center/cover url(${props => props.image});
  width:100%;
  height: 70%;
  &:hover{
    transition:0.2s linear;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  }
  `,
  Cover: styled.div`
  width:45%;
  height:70%;
  background-color:${props => props.theme.palette.gray};
  opacity:0.5;
  position:absolute;
  `,

  CardDesc: styled.div`
  width:100%;
  min-width:500px;
  height:60%;
  background-color:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  padding:35px;
  color:black;
 
  `,
  DescTitle: styled.div`
  ${props => props.theme.typography.subtitle};
  font-size:2rem;
  `,
  Desc: styled.div`
  margin-top:30px;
  ${props => props.theme.typography.description};
  color: ${props => props.theme.palette.gray};
 
  `,
  Bottom: styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:50px;
  `,
  Circle: styled.div`
  background-color:${props => props.theme.palette.primary};
   border:4px solid ${props => props.theme.palette.primary};
   color:white;
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
};

const WORKS_ITEMS = [
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/up.gif?alt=media&token=6e6b56c0-9097-46fb-b720-96b57ae93ec4',
    title: 'Uber Clone',
    label: 'Dec, 2020',
    description:
      'Uber-like web app created in React JS / typescript',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/preview.gif?alt=media&token=c71434db-050e-4e55-aa55-89d6c464533f',
    title: 'Jinstagram',
    label: 'Jan, 2021',
    description:
      'Instagram-like web app created In React JS / typescript',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/1.png?alt=media&token=6f5eb9ae-55ef-4233-9d78-7c818c6bccf5',
    title: 'Camagru',
    label: 'Oct, 2020',
    description:
      'the first 42 web project',
  },
];

const Works = () => {

  return (
    <S.Wrapper className={'projects'}>
      <S.Title>
        PROJECTS
      </S.Title>
      <S.Line />
      <S.Row>
        {WORKS_ITEMS.map((item, idx) => {
          return (
            <Link to={`/project/${item.title}`} style={{ textDecoration: "none" }} key={idx}>
              <S.Card>
                {/* <S.Cover /> */}
                <S.Preview image={item.image} />
                <S.CardDesc>
                  <S.DescTitle>{item.title}</S.DescTitle>
                  <S.Desc>{item.description}</S.Desc>
                </S.CardDesc>
              </S.Card>
            </Link>
          )
        })}
      </S.Row>
      <S.Bottom>
        <Link to={`/projects`} style={{ textDecoration: "none", color: 'black' }}>
          <S.Circle>More works</S.Circle>
        </Link>
      </S.Bottom>
    </S.Wrapper>
  );
};

export default Works;
