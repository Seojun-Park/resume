import React from 'react'
import { libft } from '../../../components/LibftFunctions'
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
        repository: string
    }
}

const Libft: React.FC<IProps> = ({ data }) => {
    const handleTable = (title) => {
        const data = libft.filter((item) => {
            if (item.title === title) {
                return item;
            } else {
                return null;
            }
        })
        if (data && data[0].functions) {
            return (
                <S.TableCol>
                    <S.TableHead>
                        <S.SubHeading>{data[0].title}</S.SubHeading>
                    </S.TableHead>
                    <S.TableBody>
                        {data[0].functions.map((item, index) => {
                            return (
                                <S.TableRow key={index}>
                                    {item}
                                </S.TableRow>
                            )
                        })}
                    </S.TableBody>
                </S.TableCol>
            )
        }
    }

    return (
        <S.Container>
            <S.Head>
                <S.Glogo src={githubLogo} alt="github" />
                <S.Link href={data.repository} target="_blank">Link</S.Link>
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
                <S.Table>
                    {handleTable('Standard')}
                    {handleTable('Additional')}
                    {handleTable('Bonus')}
                    {handleTable('Personal')}
                </S.Table>
            </S.Row>
        </S.Container>
    )
}

export default Libft