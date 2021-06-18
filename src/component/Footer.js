import styled from 'styled-components'

const Footer = () => {
    return (
        <>
          <Foot>
            <Row>
              <FooterItem>運営会社</FooterItem>
              <FooterItem>利用規約</FooterItem>
              <FooterItem>プライバシー</FooterItem>
            </Row>
            <Row>
              <FooterItem>Team Link</FooterItem>
              <FooterItem>Team Link Admin</FooterItem>
              <FooterItem>ID就活</FooterItem>
            </Row>
          </Foot>
        </>
    )
}

export default Footer;

const Foot = styled.div`
   width: 100%;
   padding-bottom: 20px;
   display: flex;
   border-top: 1px solid #C0C0C0;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Row = styled.div`
   width: 30%;
   margin-left: 20%;
`;

const FooterItem = styled.h4`
`;