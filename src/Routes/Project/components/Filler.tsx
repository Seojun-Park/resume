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


const Filler: React.FC<IProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Head>
                <S.Glogo src={githubLogo} alt="github" />
                <S.Link href={data.repository} target="_blank">Link</S.Link>
            </S.Head>
            <S.Row>
                <S.SubTitle>STACKS</S.SubTitle>
                <S.StackBox>
                    <S.Col>
                        <S.Stack src={stackIcon[7].logo} />
                        <S.ImageDesc>C</S.ImageDesc>
                    </S.Col>
                </S.StackBox>
                <S.SubTitle>USAGE</S.SubTitle>
                <S.Usage>
                    $&gt; make<br />
                    $&gt; cd resources<br />
                    $&gt; ./filler_vm -f maps/map01 -p1 ../jin.filler -p2 players/grati.filler
                </S.Usage>
            </S.Row>
            <S.Row>
                <S.SubTitle>OVERVIEW</S.SubTitle>
                <S.SubHeading>STRATEGY</S.SubHeading>
                <S.Description>
                    My attack strategy was to check relative position compared to challenger.<br />
                    While getting closer to the challenger's first position, my programme is also looking for nearest chanllerger's position.<br />
                    Then, if the challenger's and my position are very close, my programme starts to chase the challenger's further position.<br />
                    Once, I surround the challenger, the game is finished as a winner.<br /><br />

                    Check the slow version of the video, it will help you understanding:<br />
                    <S.ImageBox>
                        <S.Image src={data.images.slow} alt="fillerslow" />
                    </S.ImageBox>
                </S.Description>
            </S.Row>
        </S.Container>
    )
}

export default Filler;