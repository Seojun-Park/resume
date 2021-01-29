import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

interface IStyle {
  image?: string
}

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  Image: styled.div<IStyle>`
    width: 580px;
    height: 580px;
    background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/contact.jpeg?alt=media&token=f382b9ac-7592-461f-9423-4134407ecba6');
    @media (max-width:376px){
      display:none;
    }
  `,
  TextWrapper: styled.div`
    box-sizing: border-box;
    width: 580px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 1rem;
      width: 70%;
    }
    button {
      width: 70%;
    }
  `,
};

const Contact = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
  };

  return (
    <S.Wrapper>
      <S.Image image={'contactImage'} />
      <S.TextWrapper>
        <S.Label {...animatedItem[0]}>Contact Me</S.Label>
        <S.Title {...animatedItem[1]}>
          Est placerat in egestas
          <br />
          erat imperdiet
        </S.Title>
        <S.Description {...animatedItem[2]}>
          Consequat interdum varius sit amet mattis vulputate enim. Sit amet
          nulla facilisi morbi tempus. Nulla facilisi cras fermentum odio eu.
        </S.Description>
        <S.Form {...animatedItem[3]}>
          <TextField type="text" placeholder="Name" />
          <TextField type="text" placeholder="Email Address" />
          <TextField type="textarea" placeholder="Content" />
          <a href="mailto:jinchul112@gmail.com?subject=jinpark">
            test
          </a>
          {/* <form name="mailform">
이  메  일 : <input type="text" name="mailto" value="user1@moozuk.net"><br>
참       조 : <input type="text" name="cc" value="user2@moozuk.net"><br>
숨은 참조 : <input type="text" name="bcc" value="user3@moozuk.net"><br>
메일 제목 : <input type="text" name="subject" value="메일 제목을 입력하세요!"><br>
본문 내용 : <textarea name="body" rows="10" cols="70">메일 내용을 입력하세요!!</textarea>
<p><center>
<input type="button" onclick="location.href='mailto:' + document.mailform.mailto.value +
'?cc=' + document.mailform.cc.value + '&bcc=' + document.mailform.bcc.value +
'&subject=' + document.mailform.subject.value + '&body=' +
document.mailform.body.value" value="메일 실행">
</center></p>
</form> */}
          <Button fill="solid" type="submit">
            Contact
          </Button>
        </S.Form>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Contact;
