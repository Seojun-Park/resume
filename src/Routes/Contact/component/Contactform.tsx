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
    height: 50%;
    background-color:white;
    border-radius:10px;
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
    `,
    Textarea: styled(InputWithLabel)`
    width:100%;
    `
}


const Contactform = () => {
    const [name, nameOnchange, setName] = useInput('');
    const [email, emailOnchange, setEmail] = useInput('');
    const [body, bodyOnchange, setBody] = useInput('');

    return (
        <S.Wrapper>
            <S.Container>
                <S.Row>
                    <S.Title>Contact</S.Title>
                </S.Row>
                <S.Row>
                    <S.InfoRow>
                        <S.Input
                            type="text"
                            label="Name"
                            placeholder="Enter your name"
                            onChange={nameOnchange}
                            value={name}
                        />
                        <S.Input
                            type="text"
                            label="Email"
                            placeholder="Enter your email"
                            onChange={emailOnchange}
                            value={email}
                        />
                    </S.InfoRow>
                </S.Row>
                <S.Row>
                    <S.Textarea
                        type="textarea"
                        label="Message"
                        placeholder="Message..."
                        onChange={bodyOnchange}
                        value={body}
                    />
                </S.Row>
                <S.Row>
                    <button>button</button>
                </S.Row>
            </S.Container>
        </S.Wrapper>
    )
}

export default Contactform