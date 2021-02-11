import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
    homeref?: React.RefObject<HTMLDivElement>
}
interface StyleProps {
    isScroll?: boolean;
    theme?: string;
    isOpen?: boolean;
}


const S = {
    Wrapper: styled.div<StyleProps>`
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: all 0.2s ease-in-out;
      background-color: ${({ isScroll, theme }) =>
            isScroll ? '#111111' : '#111111'};
      box-shadow: ${props =>
            props.isScroll ? '0 0 16px 8px rgba(0, 0, 0, 0.03)' : 'none'};
    `,
    Header: styled.header<StyleProps>`
      width: 90%;
      transition: all 0.2s ease-in-out;
      height: ${props => (props.isScroll ? '60px' : '70px')};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content:space-between;
      padding-right:1rem;
      @media (max-width:750px){
          justify-content:center;
    }
    `,
    Logo: styled.span<StyleProps>`
      color: ${({ isScroll, theme }) =>
            isScroll ? theme.palette.white : theme.palette.white};
      font-weight: 900;
      font-size: 1.2rem;
      flex: 0 0 25%;
      max-width: 25%;
      padding-left:25px;
      text-decoration:none;
    `,
    Navigation: styled.div`
      display: flex;
      justify-content: center;
      @media(max-width:750px){
          display:none;
      }
    `,
    NavigationItem: styled.div<StyleProps>`
      color: ${({ isScroll, theme }) =>
            isScroll ? theme.palette.white : theme.palette.white};
    ${props => props.theme.typography.description};
      margin: 0 1rem;
      cursor: pointer;
      text-decoration-line:none;
      &:hover {
          transition:0.2s linear;
        opacity: 0.5;
        text-decoration-line:none;
      }
      @media(max-width:750px){
          display:none;
      }
    `
};


const Header: React.FC<IProps> = ({ homeref }) => {
    const [isScroll, setIsScroll] = useState<boolean>(false);
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

    useEffect(() => {
        console.log(homeref?.current?.children)
    }, [])

    const handleClick = (to: string) => {
        switch (to) {
            case 'profile':
                window.scrollTo({ top: 620, behavior: "smooth" })
                break;
            case 'projects':
                window.scrollTo({ top: 1201, behavior: 'smooth' })
                break;
            case 'contact':
                window.scrollTo({ top: 3390, behavior: "smooth" })
                break;
        }
    }

    return (
        <S.Wrapper isScroll={isScroll}>
            <S.Header isScroll={isScroll}>
                <Link to={'/'} style={{ textDecoration: "none" }}>
                    <S.Logo isScroll={isScroll}>JinPark</S.Logo>
                </Link>
                <S.Navigation>
                    <S.NavigationItem isScroll={isScroll} onClick={() => handleClick('profile')}>
                        Profile
                    </S.NavigationItem>
                    <S.NavigationItem isScroll={isScroll} onClick={() => handleClick('projects')}>
                        Project
                    </S.NavigationItem>
                    <S.NavigationItem isScroll={isScroll} onClick={() => handleClick('contact')}>
                        Contact
                    </S.NavigationItem>
                </S.Navigation>
            </S.Header>
        </S.Wrapper>
    )
}

export default Header