import React from 'react'
import styled from 'styled-components'
import InputWithLabel from '../../../components/InputwithLabel'
import useInput from '../../../hooks/useInput'

const S = {
    Wrapper: styled.div`
    width: 90%;
    height:90%;
    position:absolute;
    z-index:3;
    display:flex;
    justify-content:center;
    align-items:center;
    `,
    Container: styled.div`
    width:70%;
    min-height: 50%;
    background-color:white;
    /* border-radius:10px; */
    max-width: 800px;
    min-width: 600px;
    padding: 30px;
    box-shadow:5px 5px 10px 8px #333;
    display:flex;
    flex-direction:column;
    `,
    Title: styled.h3`
    ${props => props.theme.typography.subtitle};
    `,
    Row: styled.div`
    width:100%;
    margin:20px auto;
    `,
    InfoRow: styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    `
    ,
    Input: styled(InputWithLabel)`
    padding:8px 12px;
    width: 95%;
    border-bottom:1px solid #333;
    ::placeholder{
        color:${props => props.theme.palette.lightgray};
    }
    `,
    Textarea: styled(InputWithLabel)`
    width:100%;
    border-bottom:1px solid #333;
    ::placeholder{
        color:${props => props.theme.palette.lightgray};
    }
    `,
    Button: styled.input`
    border:none;
    padding: 12px 16px;
    ${props => props.theme.typography.button};
    background-color: ${props => props.theme.palette.primary};
    color:white;
    border-radius:4px;
    font-size:1.2rem;
    &:hover{
        transition:0.2s linear;
        background-color:${props => props.theme.palette.orange};
    }
    `
}


const Contactform = () => {
    const [name, nameOnchange] = useInput('');
    const [email, emailOnchange] = useInput('');
    const [body, bodyOnchange] = useInput('');

    return (
        <S.Wrapper className={"contact"}>
            <S.Container>
                <S.Row>
                    <S.Title>Contact</S.Title>
                </S.Row>
                <form className="gform" method="post" action="https://script.google.com/macros/s/AKfycbyXHncuH2ASiA4_jqZYWCiCkMwcAc6AmQGGdFg0USvmDuoAMGfIJ2Pb/exec">
                    <S.Row>
                        <S.InfoRow>
                            <S.Input
                                type="text"
                                label="Name"
                                placeholder="Enter your name"
                                onChange={nameOnchange}
                                value={name}
                                name="name"
                            />
                            <S.Input
                                type="email"
                                label="Email"
                                placeholder="Enter your email"
                                onChange={emailOnchange}
                                value={email}
                                name="email"
                            />
                        </S.InfoRow>
                    </S.Row>
                    <S.Row style={{ marginTop: '40px' }}>
                        <S.Textarea
                            type="textarea"
                            label="Message"
                            placeholder="Message..."
                            onChange={bodyOnchange}
                            value={body}
                            name="message"
                        />
                    </S.Row>
                    <S.Row>
                        <S.Button type="submit" value={"Submit"} />
                    </S.Row>
                </form>
            </S.Container>
        </S.Wrapper>
    )
}

export default Contactform