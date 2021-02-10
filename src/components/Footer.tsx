import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {
  Wrapper: styled.footer`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  Info: styled.div`
    flex: 0 0 30%;
    max-width: 30%;
  `,
  Logo: styled.span`
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.darkgray};
    display: inline-block;
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  `,
  Menu: styled.ul`
    flex: 0 0 20%;
    max-width: 20%;
    display: flex;
    flex-direction: column;
  `,
  MenuTitle: styled.h4`
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.secondary};
    margin-bottom: 2.5rem;
  `,
  MenuItem: styled.div`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.gray};
    display: inline-block;
    margin-bottom: 1.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `,
  Bottom: styled.div`
    width: 100%;
    color: ${props => props.theme.palette.gray};
    margin-top: 120px;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    border-top: 1px solid ${props => props.theme.palette.lightgray};
    span {
      ${props => props.theme.typography.caption};
    }
  `,
};

const Footer = () => (
  <S.Wrapper>
    <S.Info>
      <S.Logo>Jin Park</S.Logo>
      <span>jinchul112@gmail.com</span>
    </S.Info>
    <S.Menu>
      <S.MenuTitle>Quick Links</S.MenuTitle>
      <S.MenuItem><Link to="/profile" style={{ textDecoration: "none", color: 'gray' }}>About Me</Link></S.MenuItem>
      <S.MenuItem><Link to="/projects" style={{ textDecoration: "none", color: 'gray' }}>Projects</Link></S.MenuItem>
      <S.MenuItem><Link to="/contact" style={{ textDecoration: "none", color: 'gray' }}>Contact Us</Link></S.MenuItem>
    </S.Menu>
    <S.Bottom>
      <span>Jin Park © 2021</span>
    </S.Bottom>
  </S.Wrapper>
);

export default Footer;
