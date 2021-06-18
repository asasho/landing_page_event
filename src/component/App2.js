import Sticky from 'react-sticky-el';
import styled from 'styled-components';
import Header from './component/Header'
import Top from './component/Top'
import Main from './component/Main'
import CTA from './component/CTA'
import Footer from './component/Footer'
import QandA from './component/QandA'
import MediaQuery from 'react-responsive'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function App () {
  return (
    <>
      <StickStyle topOffset={680}>
        <Header />
      </StickStyle>
      <Top />
      <Main />
      <CTA />
      <QandA />
      <Footer />
      <MediaQuery maxWidth={768} >
        <CtaBack></CtaBack>
        <Box><Text>エントリー</Text><Icon><ArrowForwardIcon /></Icon></Box>
      </MediaQuery>
    </>
  );
}

export default App;

const StickStyle = styled(Sticky)`
  .sticky{
    z-index:3000;
  }
`;

const CtaBack = styled.div`
   width: 100%;
   height: 20%;
   position: fixed;
   top: 90%;
   left: 50%;
   -ms-transform: translate(-50%, -50%); 
   -webkit-transform: translate(-50%, -50%);
   background-color: rgb(128, 128, 128, 0.5);
   z-index: 2999;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  height: 80px;
  width: 50%;
  background-color: white;
  box-shadow: 0 0 8px gray;
  top: 90%;
  left: 50%;
  -ms-transform: translate(-50%, -50%); 
  -webkit-transform: translate(-50%, -50%); 
  z-index: 3000;
  border-radius: 10px
`;

const Text = styled.h2`
   font-weight: 700;
   text-align: center;
   margin-top: 20px;
   z-index: 3001;
`;

const Icon = styled(ArrowForwardIcon)`
   font-size: 45px !important;
   margin: 10px 0 0 5px;
   z-index: 3001;
`;