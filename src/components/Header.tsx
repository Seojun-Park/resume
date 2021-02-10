import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

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
      justify-content:space-between;
      padding-right:1rem;
      @media (max-width:376px){
          display:none;
    }
    `,
    Logo: styled.span<StyleProps>`
      color: ${({ isScroll, theme }) =>
            isScroll ? theme.palette.black : theme.palette.white};
      font-weight: 900;
      font-size: 1.5rem;
      flex: 0 0 25%;
      max-width: 25%;
      padding-left:25px;
      text-decoration:none;
      @media (max-width:376px){
          margin-right:20px;
    }
    `,
    Navigation: styled.div`
      /* flex: 0 0 50%; */
      /* max-width: 50%; */
      display: flex;
      justify-content: center;
    `,
    NavigationItem: styled.div<StyleProps>`
      color: ${({ isScroll, theme }) =>
            isScroll ? theme.palette.black : theme.palette.white};
    ${props => props.theme.typography.subheading};
      margin: 0 1rem;
      cursor: pointer;
      text-decoration-line:none;
      &:hover {
          transition:0.2s linear;
        opacity: 0.5;
        text-decoration-line:none;
      }
    `,
    ButtonWrapper: styled.div`
      flex: 0 0 25%;
      max-width: 25%;
      display: flex;
      justify-content: flex-end;
    `,
    MobileHeader: styled.header<StyleProps>`
    display:none;
    @media (max-width:376px){
        width: 100%;
        max-width: 376px;
        margin: auto;
        transition: all 0.2s ease-in-out;
        height: ${props => (props.isScroll ? '70px' : '100px')};
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
    }
    `,
    Burger: styled.button<StyleProps>`
    appearance: none;
    padding:10px;
    text-align:center;
    font-weight:800;
    border:0;
    cursor: pointer;
    font-size:20px;
    transform:rotate(90deg);
    z-index:9;
    background-color:transparent;
    color: ${({ isScroll, theme }) =>
            isScroll ? theme.palette.black : theme.palette.white};
    `,
    Col: styled.div`
    margin:0 15px;
    width:40%;
    &:last-child{
        display:flex;
        justify-content:flex-end;
    }
    `,
    Arrow: styled.div`
    & svg{
    transform:rotate(270deg);
    }
    `,
    DropDown: styled.ul<StyleProps>`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position:absolute;
    padding:10px;
    padding-top:15px;
    width: 100px;
    height:150px;
    margin-top:40px;
    background-color: ${props => (props.isOpen ? 'white' : 'none')};
    color:black;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    box-shadow: ${props => (props.isOpen ? '5px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);' : 'none')};
    `,
    DropDownMenu: styled.li<StyleProps>`
    display: ${props => props.isOpen ? 'block' : 'none'};
    height:30%;
    width:80%;
    &:not(:last-child()){
        border-top:1px solid #333;
    }
    `,
    ExtendedMotion: styled(Motion)`
    `,
    ExtendedLink: styled(Link)`
    `
};


const Header = () => {
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const [height, setHeight] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false);


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
        const pressed = () => {
            if (isOpen) {
                setIsOpen(false);
                setHeight(height === 0 ? 150 : 0);
            }
        }
        document.addEventListener('click', pressed);
        return () => document.removeEventListener('click', pressed)
    }, [isOpen, height, setHeight])

    useEffect(() => {
        const wheel = () => {
            setIsOpen(false);
            setHeight(height === 0 ? 150 : 0);
        }
        document.addEventListener('wheel', wheel);
        return () => document.removeEventListener('wheel', wheel)
    }, [isOpen, height, setHeight])

    useEffect(() => {
        const scroll = () => {
            setIsOpen(false);
            setHeight(height === 0 ? 150 : 0);
        }
        document.addEventListener('scroll', scroll);
        return () => document.removeEventListener('scroll', scroll)
    }, [isOpen, height, setHeight])

    const handleBurger = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
        setHeight(height === 0 ? 150 : 0)
    }

    useEffect(() => {
        if (!isOpen) {
            if (height !== 0) {
                setHeight(0)
            }
        }
    }, [isOpen, height, setHeight])

    return (
        <S.Wrapper isScroll={isScroll}>
            <S.Header isScroll={isScroll}>
                <S.ExtendedLink to={'/'} style={{ textDecoration: "none" }}>
                    <S.Logo isScroll={isScroll}>JinPark</S.Logo>
                </S.ExtendedLink>
                <S.Navigation>
                    <S.ExtendedLink to="/profile" style={{ textDecoration: "none" }}>
                        <S.NavigationItem isScroll={isScroll}>
                            Profile
                        </S.NavigationItem>
                    </S.ExtendedLink>
                    <S.ExtendedLink to="/projects" style={{ textDecoration: "none" }}>
                        <S.NavigationItem isScroll={isScroll}>
                            Project
                        </S.NavigationItem>
                    </S.ExtendedLink>
                    <S.ExtendedLink to="/contact" style={{ textDecoration: "none" }}>
                        <S.NavigationItem isScroll={isScroll}>
                            Contact
                        </S.NavigationItem>
                    </S.ExtendedLink>
                </S.Navigation>
            </S.Header>
            <S.MobileHeader isScroll={isScroll}>
                <S.Col>
                    <Link to={'/'}>
                        <S.Logo isScroll={isScroll}>JinPark</S.Logo>
                    </Link>
                </S.Col>
                <S.Col>
                    <S.Burger
                        isScroll={isScroll}
                        onClick={handleBurger}
                    >
                        {isOpen ?
                            <S.Arrow>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24">
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                </svg>
                            </S.Arrow> : "|||"
                        }
                    </S.Burger>
                    <S.ExtendedMotion style={{ height: spring(height) }}>
                        {({ height }) => <S.DropDown style={Object.assign({}, { height })} isOpen={isOpen}>
                            <S.ExtendedLink to="/profile" style={{ textDecoration: "none" }}>
                                <S.DropDownMenu isOpen={isOpen}>
                                    Profile
                                </S.DropDownMenu>
                            </S.ExtendedLink>
                            <S.ExtendedLink to="/projects" style={{ textDecoration: "none" }}>
                                <S.DropDownMenu isOpen={isOpen}>Projects</S.DropDownMenu>
                            </S.ExtendedLink>
                            <S.ExtendedLink to="/contact" style={{ textDecoration: "none" }}>
                                <S.DropDownMenu isOpen={isOpen}>Contact</S.DropDownMenu>
                            </S.ExtendedLink>
                        </S.DropDown>}
                    </S.ExtendedMotion>
                </S.Col>
            </S.MobileHeader>
        </S.Wrapper>
    )
}

export default Header