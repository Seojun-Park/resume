import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
    homeref?: React.RefObject<HTMLDivElement>
    home: boolean;
}
interface StyleProps {
    isScroll?: boolean;
    theme?: string;
    isOpen?: boolean;
}

interface DropProps {
    dropdown: boolean;
    isScroll?: boolean;
}

const S = {
    Wrapper: styled.div<StyleProps>`
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: all 0.2s ease-in-out;
      background-color: ${({ isScroll, theme }) =>
            isScroll ? '#111111' : theme.palette.primary};
      box-shadow: ${props =>
            props.isScroll ? '0 0 16px 8px rgba(0, 0, 0, 0.03)' : 'none'};
    `,
    Header: styled.header<StyleProps>`
      width: 98%;
      transition: all 0.2s ease-in-out;
      height: ${props => (props.isScroll ? '60px' : '70px')};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content:space-between;
      padding-right:1rem;
      @media (min-width: 320px) and (max-width: 480px) {
          justify-content:space-between;
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
      font-family: "Archivo", sans-serif;
    `,
    Navigation: styled.div`
      display: flex;
      justify-content: center;
      @media (min-width: 320px) and (max-width: 480px) {
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
      @media (min-width: 320px) and (max-width: 480px) {
          display:none;
      }
    `,
    Dropdown: styled.div<DropProps>`
    display:none;
     @media (min-width: 320px) and (max-width: 480px) {
         display:flex;
         flex-direction:column;
         justify-content:center;
         position:relative;
    }
    `,
    DropdownMenu: styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    background-color:#EFF2F5;
    position:absolute;
    padding:10px;
    width:120px;
    top:25px;
    right:4px;
    `,
    Burger: styled.button<StyleProps>`
    transform:rotate(90deg);
    border:none;
    background-color: ${({ isScroll, theme }) =>
            isScroll ? '#111111' : theme.palette.primary};
    color:white;
    font-weight:600;
    `,
    Menu: styled(Link)`
    padding:10px 8px;
    `
    ,
};


const Header: React.FC<IProps> = ({ homeref, home }) => {
    const [to, setTo] = useState<string>('')
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const [drop, setDrop] = useState<boolean>(false);
    const handleScroll = useCallback(() => {
        if (window.pageYOffset > 0) {
            setIsScroll(true)
        }
        if (window.pageYOffset === 0) {
            setIsScroll(false)
        }
    }, [])

    const handleClick = () => {
        setDrop(drop ? false : true);
    }

    useEffect(() => {
        window.addEventListener('mousewheel', handleScroll);
        return () => {
            window.removeEventListener('mousewheel', handleScroll)
        }
    }, [handleScroll])



    console.log(homeref?.current)
    useEffect(() => {
        if (homeref && homeref.current) {
            switch (to) {
                case 'profile':
                    homeref.current.children[2].scrollIntoView({ behavior: "smooth" })
                    setTo('')
                    break;
                case 'projects':
                    homeref.current.children[3].scrollIntoView({ behavior: "smooth" })
                    setTo('')
                    break;
                case 'contact':
                    homeref.current.children[4].scrollIntoView({ behavior: "smooth" })
                    setTo('')
                    break;
            }
        }
    }, [homeref, to])


    return (
        <S.Wrapper isScroll={isScroll}>
            <S.Header isScroll={isScroll}>
                <Link to={'/'} style={{ textDecoration: "none" }}>
                    <S.Logo isScroll={isScroll}>JinPark</S.Logo>
                </Link>
                {home ?
                    <S.Navigation>
                        <S.NavigationItem isScroll={isScroll} onClick={() => setTo('profile')}>
                            Profile
                    </S.NavigationItem>
                        <S.NavigationItem isScroll={isScroll} onClick={() => setTo('projects')}>
                            Project
                    </S.NavigationItem>
                        <S.NavigationItem isScroll={isScroll} onClick={() => setTo('contact')}>
                            Contact
                    </S.NavigationItem>
                    </S.Navigation>
                    :
                    <S.Navigation>
                        <Link to='/profile' style={{ textDecoration: "none", color: "white" }}>
                            <S.NavigationItem isScroll={isScroll} onClick={() => setTo('profile')}>
                                Profile
                        </S.NavigationItem>
                        </Link>
                        <Link to="/projects" style={{ textDecoration: "none", color: "white" }}>
                            <S.NavigationItem isScroll={isScroll} onClick={() => setTo('projects')}>
                                Project
                        </S.NavigationItem>
                        </Link>
                        <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
                            <S.NavigationItem isScroll={isScroll} onClick={() => setTo('contact')}>
                                Contact
                        </S.NavigationItem>
                        </Link>
                    </S.Navigation>
                }
                <S.Dropdown dropdown={false} isScroll={isScroll}>
                    <S.Burger onClick={handleClick} isScroll={isScroll}>
                        |||
                    </S.Burger>
                    {drop ? (
                        <S.DropdownMenu>
                            <S.Menu to='/home' style={{ textDecoration: 'none', color: 'black' }}>Home</S.Menu>
                            <S.Menu to='/profile' style={{ textDecoration: 'none', color: 'black' }}>Profile</S.Menu>
                            <S.Menu to='/projects' style={{ textDecoration: 'none', color: 'black' }}>Projects</S.Menu>
                            <S.Menu to='/Contact' style={{ textDecoration: 'none', color: 'black' }}>Contact</S.Menu>
                        </S.DropdownMenu>
                    ) : ''}
                </S.Dropdown>
            </S.Header>
        </S.Wrapper>
    )
}

export default Header