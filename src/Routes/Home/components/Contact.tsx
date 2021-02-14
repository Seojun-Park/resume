import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const S = {
    Wrapper: styled.section`
width: 100%;
height: 30vh;
padding-left: 30px;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color:white;
/* background-color: #485461; */
/* background-image: linear-gradient(315deg, #485461 0%, #28313b 74%); */
`,
    Line: styled.div`
width:7%;
height:20px;
border-bottom:2px solid black;
`,
    Container: styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`,
    Title: styled.div`
 ${props => props.theme.typography.heading};
  font-weight:600;
  margin-top: 50px;
  /* color:white; */
`,
    Circle: styled.div`
border:4px solid ${props => props.theme.palette.primary};
background-color:${props => props.theme.palette.primary};
padding: 4px 15px;
border-radius:5rem;
display:flex;
justify-content:center;
align-items:center;
cursor: pointer;
${props => props.theme.typography.description};
&:hover{
  background-color:${props => props.theme.palette.hover};
  border:4px solid ${props => props.theme.palette.hover};
  transition:0.2s linear;
  color:white;
}`,
    Description: styled.div`
  ${props => props.theme.typography.heading};
  color:${props => props.theme.palette.gray};
  font-size:1.2rem;
  margin:20px;
  `
}

const Contact = () => {
    return (
        <S.Wrapper className="contact">
            <S.Container>
                <S.Title>
                    CONTACT ME
                </S.Title>
                <S.Description>
                    I will reply you as soon as possible :D
                </S.Description>
                <Link to="/contact" style={{ textDecoration: "none", color: 'white' }}>
                    <S.Circle>
                        Contact
                    </S.Circle>
                </Link>
            </S.Container>
        </S.Wrapper>
    )
}

export default Contact