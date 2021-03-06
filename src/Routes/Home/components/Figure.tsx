import React from 'react';
import styled from 'styled-components';
import useScrollCount from '../../../hooks/useScollCount'

const S = {
  Wrapper: styled.div`
    width: 90%;
    max-width: 1180px;
    margin: auto;
    padding: 100px 0;
  `,
  List: styled.ul`
    display: flex;
  `,
  ListItem: styled.li`
    width: 100%;
    padding: 0 2rem;
    text-align: center;
    &:nth-child(2) {
      border: 2px solid ${(props) => props.theme.palette.white};
      border-top: none;
      border-bottom: none;
    }
  `,
  Number: styled.span`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.primary};
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width:376px){
      font-size:2rem;
    }
  `,
  Unit: styled.span`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.primary};
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width:376px){
      font-size:2rem;
    }
  `,
  Title: styled.h3`
    ${(props) => props.theme.typography.subheading};
    margin: 1rem 0;
    text-transform:uppercase;
    @media (max-width:376px){
      font-size: 16px;
    }
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
  `,
};

const FIGURE_ITEMS = [
  {
    title: 'Total Projects',
    number: 8,
    unit: '+',
    description: 'more than actual toy projects.',
  },
  // {
  //   title: 'Partners',
  //   number: 124,
  //   unit: '',
  //   description:
  //     'Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.',
  // }
];

const Figure = () => {
  const countItem = {
    0: useScrollCount(10),
    1: useScrollCount(124),
  };

  return (
    <S.Wrapper>
      <S.List>
        {FIGURE_ITEMS.map((item, index) => (
          <S.ListItem key={item.title}>
            <S.Number {...countItem[index]}>0</S.Number>
            <S.Unit>{item.unit}</S.Unit>
            <S.Title>{item.title}</S.Title>
            <S.Description>{item.description}</S.Description>
          </S.ListItem>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default Figure;
