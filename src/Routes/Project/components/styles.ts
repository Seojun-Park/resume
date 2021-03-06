import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 80%;
    }
  `,
  Head: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Glogo: styled.img`
    width: 20px;
  `,
  Link: styled.a`
    padding-left: 10px;
    padding-top: 10px;
    font-size: 18px;
  `,
  Row: styled.div`
    margin: 20px 0;
  `,
  Title: styled.h4`
    ${(props) => props.theme.typography.subtitle};
    font-family: "Archivo", sans-serif;
    @media (max-width: 376px) {
      font-size: 2rem;
    }
  `,
  SubTitle: styled.h4`
    ${(props) => props.theme.typography.subheading};
    font-size: 1.7rem;
    margin-bottom: 10px;
    text-transform: uppercase;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1.5rem;
    }
  `,
  SubHeading: styled.h4`
    ${(props) => props.theme.typography.subheading};
    text-transform: uppercase;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1rem;
    }
  `,
  Usage: styled.div`
    ${(props) => props.theme.typography.description};
    padding: 20px;
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
    background-color: #eee;
    border-radius: 1rem;
    text-overflow: ellipsis;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
      padding: 10px;
      font-size: 0.7rem;
    }
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    margin-top: 20px;
    margin-bottom: 20px;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 90%;
      font-size: 0.8rem;
    }
  `,
  Bold: styled.span`
    font-weight: 600;
  `,
  MapBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    @media (max-width: 376px) {
      margin: 8px auto;
    }
  `,
  Map: styled.img`
    width: 100px;
  `,
  Piece: styled.img`
    width: 250px;
    object-fit: contain;
    &:last-child {
      margin-left: 25px;
      width: 400px;
    }
    @media (max-width: 376px) {
      margin: 0;
      width: 200px;
      &:last-child {
        margin: 0;
        width: 300px;
      }
    }
  `,
  ImageBox: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px;
    @media (max-width: 376px) {
      flex-direction: column;
      align-items: center;
      margin: 0;
    }
  `,
  Image: styled.img`
    width: 300px;
    object-fit: contain;
    &:last-child {
      margin-left: 25px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      width: 280px;
      &:last-child {
        margin: 0;
        margin-top: 8px;
      }
    }
  `,
  ImageDesc: styled.span`
    ${(props) => props.theme.typography.caption};
    color: ${(props) => props.theme.palette.gray};
    padding: 15px;
    @media (min-width: 320px) and (max-width: 480px) {
      padding: 8px;
      font-size: 0.8rem;
    }
  `,
  Table: styled.div`
    width: 80%;
    display: grid;
    margin: 0 auto;
    margin-top: 15px;
    border: 1px solid #ffffff;
    border-collapse: collapse;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `,
  TableCol: styled.div`
    border-bottom: 1px solid #333;
    text-align: center;
  `,
  TableHead: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    text-align: center;
    background-color: #d0e4f5;
    border-bottom: 5px solid #333;
    color: #333;
  `,
  TableBody: styled.div`
    /* padding: 10px; */
  `,
  TableRow: styled.div`
    padding: 12px;
    &:nth-child(even) {
      background: #d0e4f5;
    }
    &:not(:first-child) {
      border-left: 2px solid #ffffff;
    }
  `,
  Snap: styled.img`
    width: 600px;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 280px;
    }
  `,
  SnapBox: styled.img`
    width: 400px;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 200px;
    }
  `,
  StackBox: styled.div`
    padding: 15px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    max-width: 800px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      padding: 15px 0;
    }
  `,
  Col: styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 320px) and (max-width: 480px) {
      height: 100px;
    }
  `,
  Stack: styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 60px;
    }
  `,
};
