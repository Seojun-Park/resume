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
        </S.Container>
    )
}

export default Jinstagram