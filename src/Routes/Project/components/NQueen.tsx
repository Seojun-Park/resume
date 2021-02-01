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



const NQueen: React.FC<IProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Head>
                <S.Glogo src={githubLogo} alt="github" />
                <S.Link>: repository link</S.Link>
            </S.Head>
            <S.Row>
                <S.SubTitle>Overview</S.SubTitle>
                <S.Description>
                    The eight queens puzzle is the problem of placing eight chess queens on an 8×8 chessboard <br />
                so that no two queens threaten each other;<br />
                thus, a solution requires that no two queens share the same row, column, or diagonal.
                </S.Description>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.nqueen} alt="nqueen" />
                        <S.Image src={data.images.result} alt="result" />
                    </S.ImageBox>
                    <S.ImageDesc>As you know, the Queen is be able to access any spot on the same row, column, or diagonal</S.ImageDesc>
                </S.MapBox>
            </S.Row>
            <S.Row>
                <S.SubTitle>Usage</S.SubTitle>
                <S.Usage>
                    $&gt; ~ make
                </S.Usage>
            </S.Row>
            <S.Row>
                <S.SubTitle>How it works</S.SubTitle>
                <S.SubHeading>First Queen's position</S.SubHeading>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.step1[0]} alt="step1" />
                        <S.Image src={data.images.step1[1]} alt="step1" />
                    </S.ImageBox>
                </S.MapBox>
                <S.Description>
                    Start to place the first queen at the top left, and mark the route the queen is possibly able to take
                </S.Description>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.step2[0]} alt="step2" />
                        <S.Image src={data.images.step2[1]} alt="step2" />
                    </S.ImageBox>
                </S.MapBox>
                <S.Description>
                    And as well as previus queen, find the available position and place the present queen the position.
                    Keep this processing until finishing to place N queens on the board.
                </S.Description>
                <S.SubHeading>Solution</S.SubHeading>
                <S.Description>
                    There are 3 check before placing a Queen on the board.
                    </S.Description>
                <S.Usage>
                    <S.Description>
                        1. Is there any Queen on the same column or row?<br />
                        2. Is there any Queen on the same diagonal?<br />
                        3. Is present queen is the N th(last) queen?<br />
                    </S.Description>
                </S.Usage>
                <S.Description>
                    1 and 2<br />
                     - if the next Queen is satisfy the question #1 and #2, it is unabled<br />
                     - back to previous status and place the Queen at different available position<br />
                     - if the next Queen is not satisfy for the question #1 and #2, place the Queen at the position<br />
                     <br />
                     3
                     - if the present Queen is Nth(last) Queen, it is the answer
                </S.Description>
            </S.Row>
        </S.Container>
    )
}

export default NQueen