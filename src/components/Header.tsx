import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Button from './Button';

interface StyleProps {
    isScroll: boolean;
    theme?: string;
}

const S = {
    Wrapper: styled.div<StyleProps>`
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: all 0.2s ease-in-out;
      background-color: ${({ isScroll, theme }) =>
            isScroll ? theme.palette.white : 'none'};
      box-shadow: ${props =>
            props.isScroll ? '0 0 16px 8px rgba(0, 0, 0, 0.03)' : 'none'};
    `,
    Header: styled.header<StyleProps>`
      width: 100%;
      max-width: 1180px;
      margin: auto;
      transition: all 0.2s ease-in-out;
      height: ${props => (props.isScroll ? '70px' : '100px')};
      display: flex;
      flex-direction: row;
      align-items: center;
    `,
    Logo: styled.span<StyleProps>`
      color: ${({ isScroll, theme }) =>
            isScroll ? theme.palette.black : theme.palette.white};
      font-weight: 900;
      font-size: 1.5rem;
      flex: 0 0 25%;
      max-width: 25%;
    `,
    Navigation: styled.div`
      flex: 0 0 50%;
      max-width: 50%;
      display: flex;
      justify-content: center;
    `,
    NavigationItem: styled.a<StyleProps>`
      color: ${props => props.theme.palette.white};
      color: ${({ isScroll, theme }) =>
            isScroll ? theme.palette.black : theme.palette.white};
      margin: 0 1rem;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    `,
    ButtonWrapper: styled.div`
      flex: 0 0 25%;
      max-width: 25%;
      display: flex;
      justify-content: flex-end;
    `,
};

const Header = () => {
    const [isScroll, setIsScroll] = useState<boolean>(false)

    const handleScroll = useCallback(() => {
        if (window.pageYOffset > 0) {
            setIsScroll(true)
        }
        if (window.pageYOffset === 0) {
            setIsScroll(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('mousewheel', handleScroll);
        return () => {
            window.removeEventListener('mousewheel', handleScroll)
        }
    }, [handleScroll])

    return (
        <S.Wrapper isScroll={isScroll}>
            <S.Header isScroll={isScroll}>
                <Link to={'/'}>
                    <S.Logo isScroll={isScroll}>JinPark</S.Logo>
                </Link>
                <S.Navigation>
                    will be
                </S.Navigation>
                <S.ButtonWrapper>
                    {/* <Button fill="solid" type="button" style={{ marginLeft: 'auto' }}> */}
                    {/* Button */}
                    {/* </Button> */}
                </S.ButtonWrapper>
            </S.Header>
        </S.Wrapper>
    )
}

export default Header