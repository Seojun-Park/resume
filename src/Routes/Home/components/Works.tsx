import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'

const S = {
  Wrapper: styled.div`
     width: 100%;
    margin: auto;
    padding: 30px 0;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color:#EFF2F5;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 90%;
      padding:30px 0;
    }
  `,
  Line: styled.div`
   width:7%;
   height:20px;
   border-bottom:2px solid black;
   @media (min-width: 320px) and (max-width: 480px) {
     width:20%;
    }
   `,
  Title: styled.div`
   ${props => props.theme.typography.title};
   @media (min-width: 320px) and (max-width: 480px) {
     text-align:center;
    }
   `,
  Row: styled.div`
    margin:0 auto;
   margin-top:30px;
   width:1280px;
   max-width:1300px;
   display:flex;
   flex-direction:row;
   padding-right:30px;
   flex-wrap:wrap;
   @media (min-width: 320px) and (max-width: 480px) {
     width:375px;
     max-width:475px;
     min-width:320px;
     justify-content: center;
    }
   `,
  Card: styled(Card)`
  cursor: pointer;
  filter: grayscale(100%);
  &:hover{
    transition:0.2s linear;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    filter: none;
    div.card-body{
      transition:0.2s linear;
      color:white;
      background-color:${props => props.theme.palette.primary};
      border-bottom-left-radius: 4px;
      border-bottom-right-radius:4px;
    }
  }
  `,
  Bottom: styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:50px;
  `,
  Circle: styled.div`
  background-color:${props => props.theme.palette.primary};
   border:4px solid ${props => props.theme.palette.primary};
   color:white;
   padding: 4px 15px;
   border-radius:5rem;
   display:flex;
   justify-content:center;
   align-items:center;
   cursor: pointer;
   ${props => props.theme.typography.description};
   &:hover{
     background-color:${props => props.theme.palette.hover};
     border:4px solid ${props => props.theme.palette.hover};
     transition:0.2s linear;
     color:white;
   }
   `,
};

const WORKS_ITEMS = [
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/decode%2Fsw%2Fsw.png?alt=media&token=a6d24b26-daca-46cb-98ab-c58ef8307ac6',
    title: 'SUNMOON UNIVERSITY SW Institute',
    name: 'SW_Sunmoon',
    label: 'Mar, 2021',
    description:
      'Website',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/decode%2Fbk%2Fbk.png?alt=media&token=c219a592-1953-4663-a6cb-41c3c4cb0211',
    title: 'SUNMOON UNIVERSITY Brain Korea 21 Program',
    name: 'BK21',
    label: 'Feb, 2021',
    description:
      'Website',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/up.gif?alt=media&token=6e6b56c0-9097-46fb-b720-96b57ae93ec4',
    title: 'UBER CLONE',
    name: 'Uber Clone',
    label: 'Dec, 2020',
    description:
      'Uber-like web app created in React JS / typescript',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/preview.gif?alt=media&token=c71434db-050e-4e55-aa55-89d6c464533f',
    title: 'JINSTAGRAM',
    name: "Jinstagram",
    label: 'Jan, 2021',
    description:
      'Instagram-like web app created In React JS / typescript',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fcamapreview.gif?alt=media&token=8e705ea5-0563-4bcf-8f91-3865894b1814',
    title: 'CAMAGRU',
    name: "Camagru",
    label: 'Oct, 2020',
    description:
      'the first 42 web project',
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/filler%2Ffiller_image.png?alt=media&token=39709a27-99f1-4e9a-aaff-3505b66e559f",
    title: 'FILLER',
    name: "filler",
    label: '1010',
    description: "42 algorithm project"
  }
];

const Works = () => {
  return (
    <S.Wrapper className={'projects'}>
      <S.Title>
        PROJECTS
      </S.Title>
      <S.Line />
      <S.Row>
        {WORKS_ITEMS.map((item, idx) => {
          return (
            <Link key={idx} to={`/project/${item.name}`}>
              <S.Card
                style={{ width: '18rem', margin: 10 }}
                key={idx}
              >
                <Card.Img style={{ height: 250, objectFit: 'cover', objectPosition: 'center' }} variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text style={{ marginBottom: 15 }}>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </S.Card>
            </Link>
          )
        })}
      </S.Row>
      <S.Bottom>
        <Link to={`/projects`} style={{ textDecoration: "none", color: 'black' }}>
          <S.Circle>More works</S.Circle>
        </Link>
      </S.Bottom>
    </S.Wrapper>
  );
};

export default Works;
