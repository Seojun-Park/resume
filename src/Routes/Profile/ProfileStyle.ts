import styled from "styled-components";

export const ProfileStyle = {
  Wrapper: styled.section`
    width: 90%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    background-color: white;
    @media (min-width: 320px) and (max-width: 480px) {
      padding: 30px 0;
    }
  `,
  Row: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 580px;
    @media (max-width: 376px) {
      display: none;
    }
  `,
  Label: styled.p`
    display: inline-block;
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 1rem;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1.5rem;
    }
  `,
  SubTitle: styled.h3`
    ${(props) => props.theme.typography.heading};
    margin: 20px 0;
    margin-bottom: 40px;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1.2rem;
    }
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 2rem;
    /* margin-left:20px; */
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1rem;
    }
  `,
  List: styled.ul`
    width: fit-content;
    margin-bottom: 2rem;
  `,
  ListItem: styled.p`
    ${(props) => props.theme.typography.description};
    padding: 1rem 1rem 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme.palette.lightgray};
    span {
      color: ${(props) => props.theme.palette.secondary};
    }
    @media (max-width: 376px) {
      font-size: 14px;
    }
  `,
  TextButton: styled.button`
    width: fit-content;
    ${(props) => props.theme.typography.textbutton};
    color: ${(props) => props.theme.palette.secondary};
    cursor: pointer;
  `,
  Image: styled.div`
    width: 400px;
    height: 400px;
    background: no-repeat center/cover
      url("https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/profile.jpeg?alt=media&token=e0ab66cc-4252-4938-90e8-800da11720fa");
    @media (max-width: 376px) {
      display: none;
    }
  `,
  IntroRow: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  ExpRow: styled.div`
    display: flex;
    flex-direction: column;
    /* margin-left:20px; */
    /* margin-right:20px; */
  `,
  Line: styled.div`
    width: 100%;
    height: 10px;
    border-bottom: 1px solid ${(props) => props.theme.palette.gray};
  `,

  ExpTitle: styled.div`
    ${(props) => props.theme.typography.heading};
    color: ${(props) => props.theme.palette.darkgray};
    text-decoration: underline 1px solid;
    text-underline-offset: 20%;
    padding-bottom: 20px;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1.2rem;
      font-weight: 600;
    }
  `,
  ExpDesc: styled.div`
    ${(props) => props.theme.typography.description};
    margin-bottom: 20px;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1rem;
    }
  `,
  ExpSp: styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
  `,
  ExpCol: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ColHeading: styled.div`
    ${(props) => props.theme.typography.subheading};
    font-weight: 400;
    margin-bottom: 15px;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1rem;
    }
  `,
  ColPeriod: styled.div`
    ${(props) => props.theme.typography.subheading};
    font-weight: 400;
    color: ${(props) => props.theme.palette.gray};
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 0.5rem;
    }
  `,
  Ul: styled.ul`
    list-style: inside;
    ${(props) => props.theme.typography.subheading};
    font-weight: 400;
  `,
  Li: styled.li`
    padding: 10px 0;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 0.9rem;
    }
  `,
};
