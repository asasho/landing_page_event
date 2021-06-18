import styled from 'styled-components'
import President2 from '../images/President2.png'

const Profile = () => {
    return (
      <>
        <Page>
          <Photo>
            <Left src={President2} alt="President2" />
            <Center><Name>池本克之</Name></Center>
          </Photo>
          <Right>
            <Text>
              <Title>池本克之紹介</Title>
              <Content>
                <Item>ドクターシーラボを上場させた社長</Item>
                <Item>社長の顧客リストを15000社ほど持っている</Item>
                <Item>400社以上の取引実績を持っている</Item>
              </Content>
            </Text>
          </Right>
        </Page>
      </>
    )
}

export default Profile

const Page = styled.div`
   width: 90%;
   margin: 40px 5% 40px 5%;
   display: flex;
   justifhy-content: center;
   box-shadow: 0 0 8px gray;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   @media (max-width: 768px) {
       flex-flow: column;
       box-shadow: none;
   }
`;

const Photo = styled.div`
   width: 65%;
   position: relative;
   z-index: 1;
   @media (max-width: 768px) {
       width: 100%;
       box-shadow: 0 0 8px gray;
   }
`;

const Left = styled.img`
   width: 100%;
`;

const Center = styled.div`
   position: absolute;
   top: 50%;
   left: 74%;
   -ms-transform: translate(-50%, -50%); 
   -webkit-transform: translate(-50%, -50%); 
   transform: translate(-50%, -50%); 
   @media (max-width: 768px) {
       width: 150px
   }
`;

const Name = styled.h1`
   font-weight: 700;
   font-size: 48px;
   font-family: "inherit";
   text-align: center;
   padding: 0 10px 0 10px;
   @media (max-width: 768px) {
       font-size: 24px;
   }
`;

const Right = styled.div`
   width: 35%;
   display: table;
   padding: 0 10px 0 10px;
   @media (max-width: 768px) {
       font-size: 18px;
       width: 100%;
   }
`;

const Text = styled.div`
   display: table-cell;
   vertical-align: middle;
`;

const Title = styled.h2`
   font-weight: 700;
   font-family: "inherit";
`;

const Content = styled.ul`
   
`;

const Item = styled.li`
   font-weight: 600;
   font-size: 20px;
   font-family: "inherit";
`;

