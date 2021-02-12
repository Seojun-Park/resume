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
        repository: string
    }
}

const Camagru: React.FC<IProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Head>
                <S.Glogo src={githubLogo} alt="github" />
                <S.Link href={data.repository} target="_blank"> Link</S.Link>
            </S.Head>
            <S.Row>
                <S.SubTitle>Stacks</S.SubTitle>
                <S.StackBox>
                    <S.Col>
                        <S.Stack src={stackIcon[8].logo} alt="php" />
                        <S.ImageDesc>PHP</S.ImageDesc>
                    </S.Col>
                    <S.Col>
                        <S.Stack src={stackIcon[9].logo} alt="docker" />
                        <S.ImageDesc>Docker</S.ImageDesc>
                    </S.Col>
                    <S.Col>
                        <S.Stack src={stackIcon[10].logo} alt="maria" />
                        <S.ImageDesc>MariaDB</S.ImageDesc>
                    </S.Col>
                    <S.Col>
                        <S.Stack src={stackIcon[11].logo} alt="hcj" />
                        <S.ImageDesc>HTML / CSS / JS</S.ImageDesc>
                    </S.Col>
                </S.StackBox>
            </S.Row>
            <S.Row>
                <S.SubTitle>Features</S.SubTitle>
                <S.Description>
                    - Create an account<br />
                    - Modify user's private data<br />
                    - Create custom pictures using user's webcam or pictures from user's device,<br />
                    &nbsp;&nbsp;and when the picture has been saved everyone can see the pictures<br />
                    - Delete uploaded pictures
                    - Connected users are able to like a picture or comment
                    - Responsive web design
                </S.Description>
            </S.Row>
            <S.Row>
                <S.SubTitle>Preview</S.SubTitle>
            </S.Row>
            <S.Row>
                <S.SubHeading>Auth</S.SubHeading>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.login} alt="login" />
                        <S.Image src={data.images.signup} alt="signup" />
                    </S.ImageBox>
                    <S.ImageDesc>
                        User can sign up with ID, Password, Username, first/last name and email<br />
                        Password should contain at least one special character and 10 length
                    </S.ImageDesc>
                </S.MapBox>
            </S.Row>
            <S.Row>
                <S.SubHeading>Main</S.SubHeading>
                <S.MapBox>
                    <S.Image src={data.images.main} alt="main" />
                    <S.ImageDesc>
                        Once, user is connected, user is able to choose whether upload image or take picture with their webcam <br />
                    or can access to Gallery or Profile page
                </S.ImageDesc>
                </S.MapBox>
            </S.Row>
            <S.Row>
                <S.SubHeading>Upload or Camera</S.SubHeading>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.upload} alt="upload" />
                        <S.Image src={data.images.camera} alt="camera" />
                    </S.ImageBox>
                    <S.ImageDesc>
                        User can only upload a jpg or png type of image and put any sticker inth list on the uploaded or taken image.<br />
                    </S.ImageDesc>
                </S.MapBox>
            </S.Row>
            <S.Row>
                <S.SubHeading>Gallery</S.SubHeading>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.gallery} alt="gallery" />
                        <S.Image src={data.images.comment} alt="comment" />
                    </S.ImageBox>
                    <S.ImageDesc>
                        Everyone can see the uploaded post even without login.<br />
                        However, to like or to comment to the post, log in is neccessary.
                    </S.ImageDesc>
                </S.MapBox>
            </S.Row>
            <S.Row>
                <S.SubHeading>User Profile Editing</S.SubHeading>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.profile} alt="profile" />
                        <S.Image src={data.images.modify} alt="modify" />
                    </S.ImageBox>
                    <S.ImageDesc>
                        User can edit its own profile data such as Username, email, name and passord.<br />
                        If the user changes the username, the user should log in with the changed username for further login.
                    </S.ImageDesc>
                </S.MapBox>
            </S.Row>
        </S.Container>
    )
}

export default Camagru