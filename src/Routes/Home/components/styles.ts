import styled from "styled-components";

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.palette.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-collapse: collapse;
    /* position: absolute; */
    /* top: 0; */
  `,
  Container: styled.div`
    display: flex;
    height: 70%;
    padding-bottom: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.div`
    ${(props) => props.theme.typography.subtitle};
    color: white;
    text-align: center;
  `,
  TitleDesc: styled.div`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.gray};
    margin-top: 20px;
    text-align: center;
  `,
  Bottom: styled.div`
    position: absolute;
    transform: rotate(90deg);
    bottom: 0;
    margin-bottom: 20px;
  `,
};
