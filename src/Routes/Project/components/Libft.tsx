import React from 'react'
import { githubLogo } from '../../../components/AllProjects'
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

const Libft: React.FC<IProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Head>
                <S.Glogo src={githubLogo} alt="github" />
                <S.Link>: repo</S.Link>
            </S.Head>
            <S.Row>
                <S.SubTitle>
                    OverView
                </S.SubTitle>
                <S.Usage>
                    <S.Description>
                        Libft has 4 sections:<br />
                    1. Libc fn : Some of the standard C functions<br />
                    2. Additional fn: Functions 42 deems will be useful for later project<br />
                    3. Bonus fn: Functions 42 deems will be useful for linked like manipulation<br />
                    4. Personal fn
                </S.Description>
                </S.Usage>
            </S.Row>
            <S.Row>
                <S.SubTitle>Function List</S.SubTitle>
            </S.Row>
        </S.Container>
    )
}

export default Libft