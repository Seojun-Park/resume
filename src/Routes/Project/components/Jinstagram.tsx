import React from 'react'
import { githubLogo, stackIcon } from '../../../components/AllProjects'
import { S } from './styles'

interface IProps {
    data: {
        preview: string;
        thumbnail: string;
        description: string;
        label: string;
        title: string;
        images: any;
    }
}

const Jinstagram: React.FC<IProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Head>
                <S.Glogo src={githubLogo} alt="github" />
                <S.Link>: repo</S.Link>
            </S.Head>
            <S.Row>
                <S.SubTitle>Overview</S.SubTitle>
                <S.Description>
                    blablabla description needed
                </S.Description>
                <S.SubHeading>
                    Front-end
                </S.SubHeading>
                <S.StackBox>
                    <S.Col>
                        <S.Stack src={stackIcon[1].logo} alt="react" />
                        <S.ImageDesc>React JS</S.ImageDesc>
                    </S.Col>
                    <S.Col>
                        <S.Stack src={stackIcon[2].logo} alt="apollo" />
                        <S.ImageDesc>Apollo</S.ImageDesc>
                    </S.Col>
                    <S.Col>
                        <S.Stack src={stackIcon[0].logo} alt="type" />
                        <S.ImageDesc>TypeScript</S.ImageDesc>
                    </S.Col>
                </S.StackBox>
                <S.SubHeading>
                    Back-end / Database
                </S.SubHeading>
                <S.StackBox>
                    <S.Col>
                        <S.Stack src={stackIcon[3].logo} alt="graphql" />
                        <S.ImageDesc>GraphQL</S.ImageDesc>
                    </S.Col>
                    <S.Col>
                        <S.Stack src={stackIcon[4].logo} alt="nodeJS" />
                        <S.ImageDesc>NodeJS</S.ImageDesc>
                    </S.Col>
                    <S.Col>
                        <S.Stack src={stackIcon[5].logo} alt="postgres" />
                        <S.ImageDesc>Postgres</S.ImageDesc>
                    </S.Col>
                </S.StackBox>
            </S.Row>
            <S.Row>
                <S.SubTitle>What's inside</S.SubTitle>
                <S.Description>Jinstagram ...</S.Description>
                <S.Row>
                    <S.SubHeading>Login | Auth</S.SubHeading>
                    <S.MapBox>
                        <S.Snap src={data.images.auth} alt="auth" />
                        <S.ImageDesc>
                            Signup with first and last name, email and intro <br />
                            And user will receive the secret code when login with email
                        </S.ImageDesc>
                    </S.MapBox>
                </S.Row>
                <S.Row>
                    <S.SubHeading>Upload</S.SubHeading>
                    <S.MapBox>
                        <S.Snap src={data.images.upload} alt="upload" />
                        <S.ImageDesc>
                            User is able to see the all feeds after user logged in and <br />
                            able to upload post with image and caption.<br />
                            if user allow this app to get user location, it will implement automatically,<br />
                            otherwise, it remains blank
                        </S.ImageDesc>
                    </S.MapBox>
                </S.Row>
                <S.Row>
                    <S.SubHeading>Edit</S.SubHeading>
                    <S.MapBox>
                        <S.Snap src={data.images.edit} alt="edit" />
                        <S.ImageDesc>
                            User can check all posts what user uploaded before<br />
                            and also able to edit user profile(Profile Photo, first and last name, and Intro).
                        </S.ImageDesc>
                    </S.MapBox>
                </S.Row>
                <S.Row>
                    <S.SubHeading>Chat</S.SubHeading>
                    <S.MapBox>
                        <S.Snap src={data.images.chat} alt="chat" />
                        <S.ImageDesc>
                            If user wants to send a message, User needs to go to other user's profile page and click the chat button.<br />
                            then, it leads the user to chat page.
                        </S.ImageDesc>
                    </S.MapBox>
                    <S.MapBox>
                        <S.Snap src={data.images.sendchat} alt="sendChat" />
                        <S.ImageDesc>
                            On user profile page, user is able to find chat button. <br />
                            When click it, all chats will be shown on the popup, and it is devided into 2 parts(From / to).
                        </S.ImageDesc>
                    </S.MapBox>

                </S.Row>
            </S.Row>
        </S.Container>
    )
}

export default Jinstagram