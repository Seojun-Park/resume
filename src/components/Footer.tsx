import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.footer`
    width: 100%;
    margin: auto;
    text-align:center;
    height: 70px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    background-color:black;
    margin-top: 35px;
  `,
  Copy: styled.span`
  ${props => props.theme.typography.description};
  color: ${props => props.theme.palette.gray};
  font-size:1rem;
  `
};

const Footer = () => (
  <S.Wrapper>
    <S.Copy>
      Jin Park © 2021 all rights reserved.
    </S.Copy>
  </S.Wrapper>
);

export default Footer;
