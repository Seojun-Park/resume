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

const BK: React.FC<IProps> = ({ data }) => {
	return (
		<S.Container>
			<S.Head>
				<S.Link href={'https://bk21edu.sunmoon.ac.kr/'} target="_blank">Click here to see the Website</S.Link>
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
						- Admin page(Content Management System)<br />
						- Interactive design(Web and Mobile Device)<br />
						- https ssl certificated url<br />
						- Presenting map by using Google map api<br />
						- Cloud web storage(firebase)
					</S.Description>
				</S.Row>
			</S.Row>
			<S.Row>
				<S.SubTitle>Preview</S.SubTitle>
				<S.Row>
					<S.SubHeading>Main Page</S.SubHeading>
					<S.MapBox>
						<S.Snap src={data.images.pagePreview} alt='preview' />
						<S.ImageDesc>
							Main view<br />
						</S.ImageDesc>
					</S.MapBox>
				</S.Row>
				<S.Row>
					<S.SubHeading>Admin Page</S.SubHeading>
					<S.MapBox>
						<S.Snap src={data.images.adminPreview} alt='admin' />
						<S.ImageDesc>
							Admin can edit, upload and delete any data on the website. <br />
							React quill is used for textarea, except that, every functions are made from scratch.
						</S.ImageDesc>
					</S.MapBox>
				</S.Row>
			</S.Row>
		</S.Container>
	)
}

export default BK