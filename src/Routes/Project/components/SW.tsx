import React from 'react'
import { stackIcon } from '../../../components/AllProjects'
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

const SW: React.FC<IProps> = ({ data }) => {
	return (
		<S.Container>
			<S.Head>
				<S.Link href={'https://sw.sunmoon.ac.kr'} target="_blank">Click here to see the Website</S.Link>
			</S.Head>
			<S.Row>
				<S.Row>
					<S.SubTitle>Stacks</S.SubTitle>
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
						Back-end / Database / Storage
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
						<S.Col>
							<S.Stack src={stackIcon[6].logo} alt="postgres" />
							<S.ImageDesc>Firebase</S.ImageDesc>
						</S.Col>
					</S.StackBox>
					<S.SubTitle>Features</S.SubTitle>
					<S.Description>
						- Real-time reservation system for facility<br />
						- User Sign-up and Login system<br />
						- Admin page(Content Management System)<br />
						- Interactive design(Web and Mobile Device)
						- Email verification<br />
						- jwt token authentification for login<br />
						- Presenting map by using Google map api<br />
						- https ssl certificated url<br />
						- Cloud web storage(firebase)
					</S.Description>
				</S.Row>
			</S.Row>
			<S.Row>
				<S.SubTitle>Page</S.SubTitle>
				<S.Row>
					<S.SubHeading>Main Page</S.SubHeading>
					<S.MapBox>
						<S.Snap src={data.images.pagePreview} alt='preview' />
						<S.ImageDesc>Main view</S.ImageDesc>
					</S.MapBox>
				</S.Row>
				<S.Row>
					<S.SubHeading>Auth</S.SubHeading>
					<S.MapBox>
						<S.Snap src={data.images.pageAuth} alt='auth' />
						<S.ImageDesc>
							User can login with their own account ID/PW or sign up for new account.<br />
							Login with web token and the token is expired 2 hours later since user logged in
						</S.ImageDesc>
					</S.MapBox>
				</S.Row>
				<S.Row>
					<S.SubHeading>Board</S.SubHeading>
					<S.MapBox>
						<S.Snap src={data.images.pageBoard} alt='board' />
						<S.ImageDesc>
							Several boards for browsing the website
						</S.ImageDesc>
					</S.MapBox>
				</S.Row>
				<S.Row>
					<S.SubHeading>QnA</S.SubHeading>
					<S.MapBox>
						<S.Snap src={data.images.pageQnA} alt='qna' />
						<S.ImageDesc>User can write Q&A for asking questing to the owner or report broken spot of facility to owner</S.ImageDesc>
					</S.MapBox>
				</S.Row>
				<S.Row>
					<S.SubHeading>Facility Reservation</S.SubHeading>
					<S.MapBox>
						<S.Snap src={data.images.pageReservation} alt='reservation' />
						<S.ImageDesc>
							User can make a booking for a facility(computer lab).<br />
							They can choose the facility and date, then it will show available time table.<br />
							After picking the time, user can send requesting to Admin.
							User should be logged in to make reservation
							</S.ImageDesc>
					</S.MapBox>
				</S.Row>
			</S.Row>
			<S.Row>
				<S.SubTitle>Admin</S.SubTitle>
				<S.Row>
					<S.SubHeading>Admin Login</S.SubHeading>
					<S.MapBox>
						<S.Snap src={data.images.adminPreview} alt='adminPreview' />
						<S.ImageDesc>
							After login as Admin, the page brings the admin user to dashboard page.<br />
							The admin user can check whole brief status on the page
						</S.ImageDesc>
					</S.MapBox>
				</S.Row>
				<S.Row>
					<S.SubHeading>Management</S.SubHeading>
					<S.MapBox>
						<S.Snap src={data.images.adminManage} alt='adminManage' />
						<S.ImageDesc>
							General management such as User, Notice, Board...etc
							(Create, Read, Update, Delete)
						</S.ImageDesc>
					</S.MapBox>
					<S.MapBox>
						<S.Snap src={data.images.adminUserManage} alt='user' />
						<S.ImageDesc>
							Registered User Management<br />
							- Check requesting from the user(facility reservation, class registeration...etc)<br />
							- Responsing user's requesting or Questioning
							- Kick out the user
						</S.ImageDesc>
					</S.MapBox>
					<S.MapBox>
						<S.Snap src={data.images.adminProgramManage} alt='programmanage' />
					</S.MapBox>
					<S.MapBox>
						<S.Snap src={data.images.adminProgramManage2} alt='program' />
						<S.ImageDesc>
							All type of class / program management<br />
							(Create, Read, Update, Delete)
						</S.ImageDesc>
					</S.MapBox>
				</S.Row>
			</S.Row>
		</S.Container>
	)
}

export default SW