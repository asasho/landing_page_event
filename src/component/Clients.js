import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import Client1 from '../images/Client1.png'
import Client2 from '../images/Client2.jpg'
import SquareIcon from './SquareIcon'

const Clients = () => {
    return (
        <>
         <ClientPage>
          <Title><SquareIcon/>池本克之から案件を紹介してもらった例</Title>
          {items.map((item) =>
            <Client key={item.id} >
              <Left>
                <MediaQuery minWidth={769}>
                  <Photo>{item.imgPc}</Photo>
                </MediaQuery>
                <MediaQuery maxWidth={768}>
                  <Photo>{item.imgSp}</Photo>
                </MediaQuery>
                <Box></Box>
                <Profile>{item.name}</Profile>
                <MediaQuery minWidth={769}><Triangle></Triangle></MediaQuery>
                <Industry><Text>{item.field}</Text></Industry>
              </Left>
              <Right>
                <Message>{item.main}</Message>
                <Comment>{item.comment}</Comment>
              </Right>
            </Client>
          )}
         </ClientPage>
        </>
    )
}

const items = [
    {id: 1, imgPc: <img src={Client1} alt="Client1" height="100%" />, imgSp: <img src={Client1} alt="Client1" width="100%" /> , name: "ネオプロモーション株式会社", field: "広告プロモーション", main: "利益数千万、8桁の可能性があります。", comment: "池本さんを通じてこれまで自分達が出会えなかった十数社の企業にお会いすることが出来ました。今回の事業提携マッチング大会を機に、アライアンスの可能性をスピーディーに実現できるはずです。"},
    {id: 2, imgPc: <img src={Client2} alt="Client2" height="100%" />, imgSp: <img src={Client2} alt="Client2" width="100%" /> , name: "株式会社シナジスタ", field: "Webマーケティング", main: "アライアンスにより新規案件20件以上獲得", comment: "池本さんは、案件をたくさん持っていると同時に、案件の内容も幅広いので、自社にマッチした案件を紹介いただけます。また商談の際に直接紹介いただけますので、他者と相見積もりになることもなく助かっています。"}
]

export default Clients;

const ClientPage = styled.div`
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Title = styled.h1`
   text-align: center;
   font-weight: 700;
   @media (max-width: 768px) {
       font-size: 24px;
   }
`;

const Client = styled.div`
   display: flex;
   height: 250px;
   margin: 0 10% 60px 10%;
   box-shadow: 0 0 8px gray;
   @media (max-width: 768px) {
       flex-flow: column;
       height: auto;
       width: 80%;
       margin-bottom: 50px;
   }
`;

const Left = styled.div`
   height: 250px;
   position: relative;
   @media (max-width: 768px) {
       width: 100%;
       height: auto;
   }
`;

const Photo = styled.div`
   height: 100%;
   z-index: 1;
   @media (max-width: 768px) {
       width: 100%;
   }
`;

const Box = styled.div`
   z-index: 2;
   background-color: white;
   position: absolute;
   width: 100%;
   height: 30%;
   top: 70%;
   left: 0;
   opacity: 0.5;
   display: table;
`;

const Profile = styled.h3`
   z-index: 3;
   position absolute;
   top: 80%;
   left: 40%;
   -ms-transform: translate(-50%, -50%); 
   -webkit-transform: translate(-50%, -50%); 
   transform: translate(-50%, -50%); 
   color: black;
   display: table-cell;
   vertical-align: middle;
   @media (max-width: 768px) {
       text-align: center;
       width: 100%;
       top: 80%;
       left: 50%;
       -ms-transform: translate(-50%, -50%); 
       -webkit-transform: translate(-50%, -50%);
       transform: translate(-50%, -50%); 
       font-size: 16px;
   }
`;

const Triangle = styled.div`
   z-index: 4;
   position: absolute;
   width: 20%;
   top: 0;
   left: 80%;
   border-bottom: 250px solid #152d4a;
   border-right: 250px solid transparent;
   border-left: 250px solid transparent;
   border-left-width: 20px;
   border-right-width: 0px;
`;

const Industry = styled.div`
   z-index: 5;
   position: absolute;
   top: 20%;
   left: 65%;
   background-color: #24ebe2;
   color: white;
   font-weight: 600;
`;

const Text = styled.h3`
   font-size: 13px;
   text-align: center;
   padding: 0 10px 0 10px;
   @media (max-width: 768px) {
       font-size: 16px;
   }
`;

const Right = styled.div`
   height: 100%;
   padding: 0 100px 0 50px;
   background-color: #152d4a;
   @media (max-width: 1280px) {
       padding: 0 20px 0 20px;
   }
   @media (max-width: 768px) {
       padding-bottom: 20px;
   }
`;

const Message = styled.h2`
   color: white;
   padding: 20px 0 10px 0;
   @media (max-width: 1280px) {
       font-size: 18px;
   }
`;

const Comment = styled.h3`
   color: white;
   @media (max-width: 1280px) {
       font-size: 16px;
   }
`;