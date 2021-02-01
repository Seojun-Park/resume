import React from 'react'
import styled from 'styled-components'

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

const S = {
    Container: styled.div`
    display:flex;
    flex-direction:column;
    `,
    Row: styled.div`
    padding-left: 20px;
    margin: 20px 0;
    `,
    Title: styled.h4`
    ${props => props.theme.typography.subtitle};
    margin: 15px;
    `,
    SubTitle: styled.h4`
    ${props => props.theme.typography.subheading};
    font-size: 1.7rem;
    padding: 10px;
    `,
    SubHeading: styled.h4`
    ${props => props.theme.typography.subheading};
    padding: 5px;
    `,
    Description: styled.p`
    ${props => props.theme.typography.description};
    `,
    Bold: styled.span`
    font-weight:600;
    `,
    MapBox: styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 15px auto;
    `,
    Map: styled.img`
    width: 100px;
    `,
    Piece: styled.img`
    width: 250px;
    object-fit:contain;
    &:last-child{
        margin-left:25px;
        width: 400px;
    }
    `,
    ImageBox: styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    `,
    ImageDesc: styled.span`
    ${props => props.theme.typography.caption};
    color:${props => props.theme.palette.gray};
    padding: 15px;
  `
}

const Fillit: React.FC<IProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Title>42-Fillit</S.Title>
            <S.Row>
                <S.SubTitle>Overview</S.SubTitle>
                <S.Description>
                    The goal of this project is to fill in a map of empty spaces.
                    Each valid space is represented by a dot like below examples:
                </S.Description>
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
                <S.SubTitle>
                    Limitation
            </S.SubTitle>
                <S.Description>
                    Allowed functions for this project are only <S.Bold>Open, close, exit, read, write, malloc</S.Bold> and <S.Bold>free</S.Bold>
                </S.Description>
            </S.Row>
            <S.Row>
                <S.SubTitle>How to</S.SubTitle>
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
                    After, validation it's time to split the array and storing the splitted array into tetrimino structure<br />
                    Since, each tetrimino blocks always takes 21 length(ex : ". . . # \n + \n at the end of the block), deviding the tetrimino array by 21,<br />
                    And storing it into 2 dimension structure
                </S.Description>
                <S.MapBox>
                    <S.Piece src={data.images.tetStructure} alt="tet" />
                    <S.ImageDesc>Each tetriminos has an ID;c : A, B, C...</S.ImageDesc>
                </S.MapBox>
                <S.Description>

                </S.Description>
            </S.Row>
        </S.Container>
    )
}

export default Fillit;