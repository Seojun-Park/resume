import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `,
  Head: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Glogo: styled.img`
    width: 20px;
  `,
  Link: styled.span`
    padding-left: 10px;
  `,
  Row: styled.div`
    padding-left: 15px;
    margin: 20px 0;
  `,
  Title: styled.h4`
    ${(props) => props.theme.typography.subtitle};
  `,
  SubTitle: styled.h4`
    ${(props) => props.theme.typography.subheading};
    font-size: 1.7rem;
    margin-bottom: 10px;
  `,
  SubHeading: styled.h4`
    ${(props) => props.theme.typography.subheading};
    padding-left: 20px;
    /* margin-top: 20px; */
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
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
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
  `,
  ImageBox: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px;
  `,
  Image: styled.img`
    width: 300px;
    object-fit: contain;
    &:last-child {
      margin-left: 25px;
    }
  `,
  ImageDesc: styled.span`
    ${(props) => props.theme.typography.caption};
    color: ${(props) => props.theme.palette.gray};
    padding: 15px;
  `,
  Table: styled.div`
    width: 80%;
    display: grid;
    margin: 0 auto;
    margin-top: 15px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `,
  TableCol: styled.div`
    border-left: 1px solid #333;
    border-bottom: 1px solid #333;
    &:last-child {
      border-right: 1px solid #333;
    }
  `,
  TableHead: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    border-bottom: 2px solid #333;
  `,
  TableBody: styled.div`
    padding: 10px;
  `,
  TableRow: styled.div`
    padding: 8px 12px;
  `,
  Snap: styled.img`
    width: 600px;
  `,
  SnapBox: styled.img`
    width: 400px;
  `,
  StackBox: styled.div`
    padding: 15px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  `,
  Col: styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
  Stack: styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
  `,
};
