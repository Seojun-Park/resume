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


const Fillit: React.FC<IProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Head>
                <S.Glogo src={githubLogo} alt="github" />
                <S.Link href={data.repository} target="_blank">Link</S.Link>
            </S.Head>
            <S.Row>
                <S.SubTitle>Overview</S.SubTitle>
                <S.Description>
                    The goal of this project is to fill in a map of empty spaces.
                    Each valid space is represented by a dot like below examples:
                </S.Description>
                <S.StackBox>
                    <S.Col>
                        <S.Stack src={stackIcon[6].logo} alt="C" />
                        <S.ImageDesc>C</S.ImageDesc>
                    </S.Col>
                </S.StackBox>
                <S.MapBox>
                    <S.Map src={data.images.map} alt="map" />
                    <S.ImageDesc>4x4 grid with a new line character at the end of each line</S.ImageDesc>
                </S.MapBox>
                <S.Description>
                    Every piece of tetrimino must follow these rules:<br />
                1. Tetrimino is represented as ',' and '#'. Dot is space and Hash is a block.<br />
                2. Tetrimino must be in a 4x4 block. Each line ends with a '\n'.<br />

                Here are examples of pieces :
            </S.Description>
                <S.MapBox>
                    <S.ImageBox>
                        <S.Piece src={data.images.pieces} alt="pieces" />
                        <S.Piece src={data.images.possiblePiece} alt="possible" />
                    </S.ImageBox>
                    <S.ImageDesc>All tetriminos must be part of 19 classic tetris piece</S.ImageDesc>
                </S.MapBox>
            </S.Row>
            <S.Row>
                <S.SubTitle>Usage</S.SubTitle>
                <S.Usage>
                    $&gt; ~make
                </S.Usage>
            </S.Row>
            <S.Row>
                <S.SubTitle>
                    Limitation
            </S.SubTitle>
                <S.Description>
                    Allowed functions for this project are only <S.Bold>Open, close, exit, read, write, malloc</S.Bold> and <S.Bold>free</S.Bold>
                </S.Description>
            </S.Row>
            <S.Row>
                <S.SubTitle>Solution</S.SubTitle>
                <S.SubHeading>Step 1</S.SubHeading>
                <S.Description>
                    Check the input piece file(a block of 4 lines) and check for the length of the line and<br />
                    if it's validated piece by following rules:<br /><br />
                    1.if the length of the line is larger than 4<br />
                    2.if there is any other characters than '.' and '#'<br /><br />

                    if all input are validated tetriminos, stroing into huge one array.
                    If the number of # is greater than than 4, or any other condition is false, <br />the exit the function and print 'Error'
                </S.Description>
            </S.Row>
            <S.Row>
                <S.SubHeading>Step 2</S.SubHeading>
                <S.Description>
                    When tetrimino validation is finished, it's time to split the array and storing the splitted array into tetrimino structure<br />
                    Since, each tetrimino blocks always takes 21 length(ex : ". . . # \n + \n at the end of the block), deviding the tetrimino array by 21,<br />
                    And storing it into 2 dimension structure
                </S.Description>
                <S.MapBox>
                    <S.Piece src={data.images.tetStructure} alt="tet" />
                    <S.ImageDesc>Each tetriminos has an ID;c : A, B, C...</S.ImageDesc>
                </S.MapBox>
                <S.Description>
                    After, finishing storing tetriminos into the structure, create new map that filled with only '.' depending on quantities of tetriminos.
                </S.Description>
            </S.Row>
            <S.Row>
                <S.SubHeading>Step 3</S.SubHeading>
                <S.Description>
                    The backgracking algorithm for this program is similar to many other students at 42.
                    But, the key is the speed when finding the next possible spot to fill in the piece and<br />
                    how the shifting is handled.<br />
                    To illustrate how the algorithm works, please refer these examples below:<br />
                </S.Description>
                <S.MapBox>
                    <S.Map src={data.images.example1} alt="example1" />
                    <S.ImageDesc>O and rotated L piece</S.ImageDesc>
                </S.MapBox>
                <S.Description>
                    When the program started, the first piece is alway filled at the top left.<br />
                    So, it would look like this :
                </S.Description>
                <S.MapBox>
                    <S.Map src={data.images.example2} alt="example2" />
                    <S.ImageDesc>O piece starting at (0,0)</S.ImageDesc>
                </S.MapBox>
                <S.Description>
                    If the program look at the next piece, it will realize it won't fit in the map.<br />
                    Then, it will go through each slot on the map and check the collition and try to fit the next piece.
                    Since, there are no possible, it goes back to the previuse piece and shift it to the right like this:<br />
                </S.Description>
                <S.MapBox>
                    <S.Map src={data.images.example3} alt="example3" />
                    <S.ImageDesc>Add 1 to all x coordinates</S.ImageDesc>
                </S.MapBox>
                <S.Description>
                    However, it won't fit yet. So then, keep shifting until the piece through each possible space on the map
                </S.Description>
                <S.MapBox>
                    <S.Map src={data.images.example4} alt="example4" />
                    <S.ImageDesc>Now it has space to fit for next piece!</S.ImageDesc>
                </S.MapBox>
                <S.Description>
                    Finally, the program found the right position for the first piece and filling the next piece is possible.
                    Thus, the solution will be like :
                </S.Description>
                <S.MapBox>
                    <S.Map src={data.images.example5} alt="example5" />
                </S.MapBox>
            </S.Row>
        </S.Container>
    )
}

export default Fillit;