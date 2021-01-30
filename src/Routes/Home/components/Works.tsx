import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../components/Button';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

interface IStyle {
  image: string
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 376px){
      padding: 60px 0;
    }
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
    text-align: center;
    margin-bottom: 1rem;
    @media (max-width:376px){
      font-size:18px;
    }
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 4rem;
  `,
  List: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4rem;
    @media (max-width:376px){
    flex-wrap:wrap;
    }
  `,
  ListItem: styled.li`
    width: 380px;
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
    @media (max-width:376px){
      width: 360px;
      margin:0 auto;
      margin-bottom: 1rem;
    }
  `,
  ItemImage: styled.div<IStyle>`
    width: 100%;
    height: 280px;
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 1px solid #333;
    background: no-repeat center/cover url(${props => props.image});
  `,
  TextContainer: styled.div`
    padding: 2rem;
  `,
  ItemTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.black};
    margin-bottom: 0.75rem;
  `,
  ItemLabel: styled.p`
    ${props => props.theme.typography.caption};
    color: ${props => props.theme.palette.gray};
    font-weight: 400;
    margin-bottom: 1.5rem;
  `,
  ItemDesciption: styled.p`
    ${props => props.theme.typography.description};
    margin-bottom: 1.5rem;
  `,
  TextButton: styled.button`
    width: fit-content;
    padding: 0;
    ${props => props.theme.typography.textbutton};
    color: ${props => props.theme.palette.secondary};
    cursor: pointer;
  `,
};

const WORKS_ITEMS = [
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/up.gif?alt=media&token=6e6b56c0-9097-46fb-b720-96b57ae93ec4',
    title: 'Uber Clone',
    label: 'Dec, 2020',
    description:
      'blabla ',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/preview.gif?alt=media&token=c71434db-050e-4e55-aa55-89d6c464533f',
    title: 'Jinstagram',
    label: 'Jan, 2021',
    description:
      'cloning this bla bla',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/1.png?alt=media&token=6f5eb9ae-55ef-4233-9d78-7c818c6bccf5',
    title: 'Camagru',
    label: 'Oct, 2020',
    description:
      'the first 42 web project',
  },
];

const Works = () => {
  const animatedItem = {
    0: useScrollFadeIn('left', 1),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.4),
  };

  return (
    <S.Wrapper>
      <S.Label>My Recent Works</S.Label>
      <S.Title>
        See my personal projects and <br />
        projects in école 42
      </S.Title>
      <S.List>
        {WORKS_ITEMS.map((item, index) => (
          <S.ListItem key={item.title} {...animatedItem[index]}>
            <S.ItemImage image={item.image} />
            <S.TextContainer>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemLabel>{item.label}</S.ItemLabel>
              <S.ItemDesciption>{item.description}</S.ItemDesciption>
              <Link to={`/project/${item.title}`}>
                <S.TextButton>Read more</S.TextButton>
              </Link>
            </S.TextContainer>
          </S.ListItem>
        ))}
      </S.List>
      <Button fill="outline">More Works</Button>
    </S.Wrapper>
  );
};

export default Works;
