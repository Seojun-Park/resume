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
        repository
    }
}

const NQueen: React.FC<IProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Head>
                <S.Glogo src={githubLogo} alt="github" />
                <S.Link href={data.repository} target="_blank">Link</S.Link>
            </S.Head>
            <S.Row>
                <S.SubTitle>OVERVIEW</S.SubTitle>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.nqueen} alt="nqueen" />
                        <S.Image src={data.images.result} alt="result" />
                    </S.ImageBox>
                    <S.ImageDesc>As you know, the Queen is be able to access any spot on the same row, column, or diagonal</S.ImageDesc>
                </S.MapBox>
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
                    There is a check list before placing a Queen on the board.
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
                     - if the present Queen is N th(last) Queen, plus 1 to number of cases
                     - if the present Queen is not the N th(last) Queen, move to next
                </S.Description>
            </S.Row>
            <S.Row>
                <S.SubHeading>Back Tracking</S.SubHeading>
                <S.Description>
                    The easiest way to solve N-Queen puzzle is check all number of cases.
                    However, it would be faster if skipping all unneccessary precess<br />
                    when the next Queen finds is unable to place at any position.<br />
                    <br />
                    Check the following description:
                </S.Description>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.backtracking.firstQueen} alt="back" />
                        <S.Image src={data.images.backtracking.wrong1} alt="back" />
                    </S.ImageBox>
                    <S.ImageDesc>Case 1</S.ImageDesc>
                </S.MapBox>
                <S.Description>
                    The first Queen is placed at A8, then the next Queen wouldn't be able to place at B8<br />
                    At this case, the next queen will not check for further possible cases, and just go back to previus case
                </S.Description>
            </S.Row>
            <S.Row>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.backtracking.firstQueen} alt="back" />
                        <S.Image src={data.images.backtracking.wrong2} alt="back" />
                    </S.ImageBox>
                    <S.ImageDesc>Case 2</S.ImageDesc>
                </S.MapBox>
                <S.Description>
                    On previus case, I check B8 is unavailabe, so it would be able to check, if B7 is available.<br />
                    However, B7 is also on the same digonal route from A8, So it is unavailable position as well.
                    Then, stop finding further possible cases and back to previous case.
                </S.Description>
            </S.Row>
            <S.Row>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Image src={data.images.backtracking.firstQueen} alt="back" />
                        <S.Image src={data.images.backtracking.secondQueen} alt="back" />
                    </S.ImageBox>
                    <S.ImageDesc>Case 3</S.ImageDesc>
                </S.MapBox>
                <S.Description>
                    Through out above cases, I know B8 and B7 is unavailable position.<br />
                    Now, the programme tries to place the Queen at B6.

                    As you can see, back tracking algorithm works only in possible case.
                    if it is impossible, it goes back and finding new possible way.<br /><br />

                    Here's how I implemented, please check out the code below:
                </S.Description>
                <S.ImageBox>
                    <S.Image src={data.images.code} alt="code" />
                </S.ImageBox>
            </S.Row>
        </S.Container>
    )
}

export default NQueen