import React from 'react';
import { S } from './styles'

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
  </svg>
)

const Hero = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <span style={{ fontSize: '3rem' }}>👨🏻‍💻</span><br />
          JIN PARK<br />
          <div style={{ width: 100, height: 2 }} />
          WEB DEVELOPER
          </S.Title>
      </S.Container>
      <S.Bottom>
        <Arrow />
      </S.Bottom>
    </S.Wrapper>
  );
};

export default Hero;
