import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  preview: string;
}

export const Nested = styled.div`
  display: none;
  text-decoration: none;
`;

export const AllProjectStyle = {
  Wrapper: styled.div`
    padding: 30px;
    padding-top: 50px;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 90%;
      padding: 30px auto;
      margin: 0 auto;
    }
  `,
  Line: styled.div`
    width: 7%;
    height: 20px;
    border-bottom: 2px solid black;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 20%;
    }
  `,
  Title: styled.div`
    ${(props) => props.theme.typography.title};
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 2rem;
    }
  `,
  Container: styled.div`
    width: 80%;
    min-height: 50vh;
    margin: 50px auto;
    /* background-color:white; */
    display: grid;
    padding-top: 35px;
    padding-bottom: 35px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 376px) {
      width: 95%;
      grid-template-columns: repeat(2, 40%);
      grid-template-rows: 150px;
      grid-auto-rows: 150px;
    }
  `,
  ProjectSp: styled.div`
    display: none;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 90%;
      height: 40px;
      border-bottom: 2px solid #333;
    }
  `,
  Project: styled(Link)<IProps>`
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    margin-right: 8px;
    text-decoration: none;
    cursor: pointer;
    background: no-repeat center/cover url(${(props) => props.preview});
    &:hover {
      text-decoration: none;
      background: none;
      ${Nested} {
        &:hover {
          background-color: ${(props) => props.theme.palette.primary};
          transition: 0.2s linear;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        transition: 0.2s linear;
      }
    }
    @media (min-width: 320px) and (max-width: 480px) {
      height: 200px;
      width: 350px;
      border-bottom: 2px solid #333;
      border-top: 2px solid #333;

      margin: 30px auto;
      /* margin-bottom: 30px; */
    }
  `,
  ProjectTitleBox: styled.div`
    border: 3px solid white;
    padding: 15px;
    /* padding-top: 25px; */
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `,
  ProjectTitle: styled.span`
    font-weight: 600;
    color: white;
    font-size: 2rem;
  `,
};
