import styled from 'styled-components'

const Footer = () => {
    return (
        <>
          <Foot>
            <Row>
              <FooterItem><Item href="https://www.ikemotokatsuyuki.net/law/" >特定商取引法</Item></FooterItem>
            </Row>
            <Row>
              <FooterItem><Item href="https://www.ikemotokatsuyuki.net/pp/">プライバシーポリシー</Item></FooterItem>
            </Row>
          </Foot>
        </>
    )
}

export default Footer;

const Foot = styled.div`
   width: 100%;
   padding-bottom: 120px;
   display: flex;
   justify-content: center;
   border-top: 1px solid #C0C0C0;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   @media (max-width: 768px) {
       padding-bottom: 80px;
   }
`;

const Row = styled.div`
   width: 40%;
`;

const FooterItem = styled.h4`
   cursor: pointer;
`;

const Item = styled.a`
   text-decoration: none;
   color: black;
`;