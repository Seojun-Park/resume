import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';

const S = {
    Background: styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 780px;
    /* background: no-repeat center/cover url(); */
    background-color:gray;
  `,
    Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
    Title: styled.h1`
    ${props => props.theme.typography.title};
    color: #fff;
    margin-bottom: 0.5rem;
  `,
    Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.white};
    margin-bottom: 2rem;
  `,
};

const Hero = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.Title>
                    Jin Park
          <br />
          Web Software Developer
        </S.Title>
                <S.Description>
                    Fullstack
          <br />
          ReactJS / Javascript / Typescript / NodeJS / Graphql
        </S.Description>
                <Button fill="solid" type="button">
                    See my profile
        </Button>
            </S.Wrapper>
        </S.Background>
    );
};

export default Hero;
