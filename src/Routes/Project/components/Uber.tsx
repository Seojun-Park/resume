import React from 'react'
import { githubLogo } from '../../../components/AllProjects'
import { S } from './styles'
import { stackIcon } from '../../../components/AllProjects'


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


const Uber: React.FC<IProps> = ({ data }) => {
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
                <S.Description>This Uber clone contains similer user interface as Original uber</S.Description>
                <S.Row>
                    <S.SubHeading>Login | Auth</S.SubHeading>
                    <S.MapBox>
                        <S.Snap src={data.images.login} alt="auth" />
                        <S.ImageDesc>User can login with their phone number or social media(Facebook)</S.ImageDesc>
                    </S.MapBox>
                </S.Row>
                <S.Row>
                    <S.SubHeading>Add Place</S.SubHeading>
                    <S.MapBox>
                        <S.Snap src={data.images.addPlace} alt="addplace" />
                        <S.ImageDesc>User can add a favorite place by searching address or picking on the map</S.ImageDesc>
                    </S.MapBox>
                </S.Row>
                <S.Row>
                    <S.SubHeading>Edit User</S.SubHeading>
                    <S.MapBox>
                        <S.Snap src={data.images.editUser} alt="edit" />
                        <S.ImageDesc>User can modify user's personal data(name / Profile Photo) and added places </S.ImageDesc>
                    </S.MapBox>
                </S.Row>
                <S.Row>
                    <S.SubHeading>Request Ride</S.SubHeading>
                    <S.MapBox>
                        <S.Snap src={data.images.request} alt="request" />
                        <S.ImageDesc>
                            User can request a ride to get the destination. <br />
                            Searching the nearset driver and request, and the driver can choose Accept the ride or dismiss it.
                        </S.ImageDesc>
                    </S.MapBox>
                </S.Row>
                <S.Row>
                    <S.SubHeading>Chat and Finish Riding</S.SubHeading>
                    <S.MapBox>
                        <S.Snap src={data.images.end} alt="finishi" />
                        <S.ImageDesc>
                            Real time chat is available between passenger and driver only when driver accept the requesting ride.<br />
                            When the ride is finished, the chat is closed, and passenger and driver can not access to chat room.
                        </S.ImageDesc>
                    </S.MapBox>
                </S.Row>
            </S.Row>
            <S.Row>
                <S.SubTitle>title....</S.SubTitle>
                <S.Row>
                    <S.SubHeading>Get drivers near the user</S.SubHeading>
                    <S.Description>
                        This is a car-sharing web application, so customer should be able to find drivers near by.<br />
                        When a driver or customer is logged in to this app, it is mendatory to allow this app to get user's current position.<br />
                        Drivers can't know where the customer is until they request the ride, however, customer is able to see the current position of drivers.<br />
                        as you can see on below, customer is able to see the driver, but driver doesn't <br />
                    </S.Description>
                    <S.MapBox>
                        <S.ImageBox>
                            <S.Piece src={data.images.main} alt="main" />
                        </S.ImageBox>
                        <S.ImageDesc>
                            Left side: Customer | Right side: Driver<br />
                        </S.ImageDesc>
                    </S.MapBox>
                    <S.MapBox>
                        <S.ImageBox>
                            <S.Image src={data.images.move1} alt="main" />
                            <S.Image src={data.images.move2} alt="main" />
                        </S.ImageBox>
                        <S.ImageDesc>
                            Customer is tracking driver's move and it's re-rendered on the map in real time on customer's screen
                        </S.ImageDesc>
                    </S.MapBox>
                </S.Row>
                <S.Row>
                    <S.SubHeading>Get address and coordinates by using GoogleMap API</S.SubHeading>
                    <S.Description>
                        When the user adding a favorite place or requesting a ride, the app should be able to find the right position where the user want to find.<br />
                        So, I used the Google Map API(map, geocoding).<br />
                        it wasn't that much difficult.<br />
                        First of all, when the user is logged in the app, the app asks a permission to get user's current position. when user allows it, then the app sends<br />
                        user's current latitude and longitude to google api and get the address data from them.<br />
                    </S.Description>
                    <S.MapBox>
                        <S.Snap src={data.images.find} alt="find" />
                        <S.ImageDesc>
                            When the app rendered first time, the app gets user's current position, and if the user moves the map, the coordinates state always set the center of the map's coordinates.
                        </S.ImageDesc>
                        <S.Snap src={data.images.api} alt="api" />
                        <S.ImageDesc>
                            Depending on the way of searching(User can search by address or pick a address on the map), the value (address || coordinates) goes to the functions on above.<br />
                        </S.ImageDesc>
                        <S.ImageBox>
                            <S.SnapBox src={data.images.api1} alt="api1" />
                            <S.SnapBox src={data.images.api2} alt="api2" />
                        </S.ImageBox>
                        <S.Snap src={data.images.api3} alt="api3" />
                        <S.ImageDesc>
                            Then, you can receive those data from the api
                        </S.ImageDesc>
                    </S.MapBox>
                </S.Row>
            </S.Row>
        </S.Container>
    )
}

export default Uber