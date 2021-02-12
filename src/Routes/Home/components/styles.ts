import styled from "styled-components";

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 94vh;
    background-color: ${(props) => props.theme.palette.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    text-transform: capitalize;
    font-family: "Archivo", sans-serif;
    font-weight: 700;
    /* font-family: "Montserrat", sans-serif; */
    font-size: 5rem;
  `,
  TitleDesc: styled.div`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.white};
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
