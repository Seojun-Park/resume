import React from 'react';
import styled from 'styled-components'
import Button from '../../../components/Button'
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    padding: 120px 0;
    background-color: ${props => props.theme.palette.background};
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 2rem;
    text-align: center;
  `,
};

const Banner = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
  };

  return (
    <S.Wrapper>
      <S.Label {...animatedItem[0]}>Get Started</S.Label>
      <S.Title {...animatedItem[1]}>
        Etiam erat velit
        <br />
        scelerisque in dictum
      </S.Title>
      <div {...animatedItem[2]}>
        <Button fill="solid" type="button">
          button
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default Banner;
