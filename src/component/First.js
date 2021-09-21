import styled from 'styled-components'
import { Picture } from 'react-responsive-picture';
import President1 from '../images/President1.png'
import PresidentSp from '../images/PresidentSP.jpg'
import MediaQuery from 'react-responsive'

const First = () => {
    return (
      <>
        
          <Page>
            <Right>
              <MediaQuery minWidth={769}>
                <Photo src={President1} alt="president" />
              </MediaQuery>
              <MediaQuery maxWidth={768}>
                <Photo src={PresidentSp} alt="president" />
              </MediaQuery>
            </Right>
            <Left>
              <Alert><Capacity>4社限定！</Capacity></Alert>
              <Benefit>
                400社以上の取引実績を持つ<br/>コンサルタントから顧客を<br/>直接紹介してもらえる
              </Benefit>
              <Consept>
                1時間で事業提携ができる<br/>
                マッチングイベント
              </Consept>
              <Box>
              <Box1>
                株式会社パジャ・ポス代表取締役<br/>
                池本克之
              </Box1>
              <Box2>
                7/29　THU<br/>
                17:00- ONLINE開催
              </Box2>
              </Box>
            </Left>
          </Page>
      </>
    )
}

export default First;



const Page = styled.div`
   display: flex;
   justify-content: center;
   flex-flow: row-reverse;
   width: 100%;
   margin: 0 0 40px 0;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   @media (max-width: 768px) {
       flex-flow: column;
       margin-top: 0;
   }
`;


const Left = styled.div`
   z-index: 2;
   width: 50%;
   padding-top: 20px;
   margin-top: 30px;
   margin-bottom: 50px;
   @media (max-width: 1280px) {
       margin-top: 20px;
   }
   @media (max-width: 768px) {
       width: 100%;
       margin: 0;
   }
`;

const Alert = styled.div`
   width: 30%;
   height: 60px;
   margin: 0 35% 20px 35%;
   background-color: black;
   display: table;
   justify-content: flex-end;
   border-radius: 30px;
   @media (max-width: 1280px) {
       margin: auto;
       width: 140px;
       height: 40px;
   }
`;

const Capacity = styled.h1`
   text-align: center;
   font-weight: 700;
   color: white;
   display: table-cell;
   vertical-align: middle;
   @media (max-width: 1280px) {
       width: 100%;
       margin: 0;
       font-size: 24px;
   }
`;

const Benefit = styled.h1`
   font-weight: 700;
   font-size: 36px;
   text-align: center;
   margin: 10px 0 10px 0;
   @media (max-width: 1280px) {
       font-size: 24px;
   }
`;

const Consept = styled.h2`
   text-align: center;
   margin: 20px 0 20px 0;
   @media (max-width: 1280px) {
       font-size: 18px;
   }
`;

const Box = styled.div`
   display: flex;
   flex-flow: column;
   justify-content: center;
`;

const Box1 = styled.button`
   height: 100px;
   width: 76%;
   margin: 20px 12%;
   text-align: center;
   font-weight: 700;
   font-size: 24px;
   box-shadow: 0 0 8px gray;
   border: none;
   color: gray;
   @media (max-width: 1280px) {
   　 　width: 300px;
       height: 60px;
       font-size: 16px;
       margin-left: auto;
       margin-right: auto;
   }
`;

const Box2 = styled(Box1)`
   color: white;
   background-color: black;
`;

const Right = styled.div`
   z-index: 1;
   width: 70%;
   @media (max-width: 768px) {
       width: 100%;
       margin-top: 0;
       border: none;
   }
`;

const Photo = styled.img`
   width: 100%;
   height: auto;
   border: none;
`;

