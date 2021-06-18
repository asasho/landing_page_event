import styled from 'styled-components'
import { Picture } from 'react-responsive-picture';
import President1 from '../images/President1.png'
import PresidentSP from '../images/PresidentSP.jpg'

const First = () => {
    return (
      <>
          <Page>
            <Right src={President1} alt="president" />
            <Left>
              <Alert><Capacity>4社限定！</Capacity></Alert>
              <Benefit>
                400社以上の取引実績を持つ<br/>コンサルタントから顧客を<br/>直接紹介してもらえる
              </Benefit>
              <Consept>
                短期間で事例共有ができる<br/>
                事業提携マッチングイベント
              </Consept>
              <Box1>
                株式会社パジャポス代表取締役<br/>
                池本克之
              </Box1>
              <Box2>
                7/29　THU<br/>
                17:00- ONLINE開催
              </Box2>
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
   width: 50%;
   padding-top: 20px;
   margin-top: 50px;
   margin-bottom: 50px;
   @media (max-width: 768px) {
       width: 100%;
       margin: 0;
   }
`;

const Alert = styled.div`
   width: 26%;
   height: 60px;
   margin: 0 37% 20px 37%;
   background-color: black;
   display: table;
   justify-content: flex-end;
   border-radius: 30px;
   @media (max-width: 768px) {
       margin: auto;
       width: 140px;
       height: 40px;
       font-size: 24px;
   }
`;

const Capacity = styled.h1`
   text-align: center;
   font-weight: 700;
   color: white;
   display: table-cell;
   vertical-align: middle;
   @media (max-width: 768px) {
       width: 100%;
       margin: 0;
       font-size: 24px;
   }
`;

const Benefit = styled.h1`
   font-weight: 700;
   font-size: 36px;
   font-family: "inherit";
   text-align: center;
   margin: 10px 0 10px 0;
   @media (max-width: 768px) {
       font-size: 24px;
   }
`;

const Consept = styled.h2`
   text-align: center;
   margin: 20px 0 20px 0;
   font-family: "inherit";
   @media (max-width: 768px) {
       font-size: 18px;
   }
`;

const Box1 = styled.button`
   height: 100px;
   width: 68%;
   margin: 20px 18% 20px 18%;
   text-align: center;
   font-weight: 700;
   font-size: 24px;
   box-shadow: 0 0 8px gray;
   border: none;
   color: gray;
   @media (max-width: 768px) {
       height: 60px;
       font-size: 16px;
   }
`;

const Box2 = styled(Box1)`
   color: white;
   background-color: black;
`;

const Right = styled.img`
   width: 40vw;
   @media (max-width: 768px) {
       width: 100%;
       margin-top: 0;
   }
`;

