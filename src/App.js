import React, { useState } from 'react';
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import Hamburger from 'hamburger-react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TeamLink from './images/TeamLink_logo.png'
import TeamLink3 from './images/TeamLink_logo3.png'
import Top from './component/Top'
import CTA from './component/CTA'
import Footer from './component/Footer'
import QandA from './component/QandA'
import First from './component/First'
import Event from './component/Event'
import Profile from './component/Profile'
import People from './component/People'
import Books from './component/Books'
import {useInView} from 'react-intersection-observer';
import Feature from './component/Feature'
import Matters from './component/Matters'
import Clients from './component/Clients'
import Charge from './component/Charge'
import Partner from './component/Partner'
import Flow from './component/Flow'
import { fallDown as Menu } from 'react-burger-menu'
import Sticky from 'react-sticky-el';
import WhatIsTeamLink from './component/WhatIsTeamLink'

const App = () => {
  const Link      = Scroll.Link;
　const Element   = Scroll.Element;
  const scroller = Scroll.scroller;
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  
  const stateChangeHandler = (newState) => {
    setMenuOpenState(newState.isOpen)
  }
  
  const toggleMenu = () => {
    setMenuOpenState(!menuOpenState)
  }
  
  const { ref, inView } = useInView({
      rootMargin: '-50px',
      triggerOnce: true,
  });
  
  return (
    <Whole>
      <StickStyle style={{transform: "none"}} topOffset={680}>
        <Nav>
          <MediaQuery minWidth={769}>
            <LogoImg src={TeamLink} alt="logo" />
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <Img><LogoImg src={TeamLink3} alt="logo" /></Img>
          </MediaQuery>
          <Right>
            <MediaQuery minWidth={769}>
              <Table>
                <HeaderItem><Link activeClass="active" to="test1" smooth={true} offset={-100} duration={500}><MenuText>特徴</MenuText></Link></HeaderItem>
                <HeaderItem><Link activeClass="active" to="test2" smooth={true} offset={-100} duration={500}><MenuText>事例</MenuText></Link></HeaderItem>
                <HeaderItem><Link activeClass="active" to="test3" smooth={true} offset={-150} duration={500}><MenuText>イベント<br/>概要</MenuText></Link></HeaderItem>
                <HeaderItem><Link activeClass="active" to="test4" smooth={true} offset={-120} duration={500}><MenuText>料金</MenuText></Link></HeaderItem>
              </Table>
            </MediaQuery>
            <MediaQuery minWidth={769}>
              <Entry>
                <Box href="https://myasp.pajaposs.com/p/r/GNrCz3ps" style={{textDecoration: "none"}}>
                  <Text>エントリー</Text>
                  <Icon><ArrowForwardIcon /></Icon>
                </Box>
              </Entry>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
              <StyledMenu>
                <Menu right
                  isOpen={menuOpenState}
                  noOverlay
                  disableOverlayClick
                  burgerButtonClassName={'open_button'}
                  customBurgerIcon={ <Hamburger /> }
                  onStateChange={(state) => stateChangeHandler(state)}
                >
                 <MenuItem className="menu-item" >
                   <a 
                     onClick={()=>{
                       scroller.scrollTo('test1',{
                         duration: 500,
                         smooth: true,
                         offset: -80
                       });
                       setMenuOpenState(!menuOpenState)
                     }}
                   >特徴</a>
                 </MenuItem>
                 <MenuItem className="menu-item" >
                   <a 
                     onClick={async()=>{
                       await scroller.scrollTo('test2',{
                         duration: 500,
                         smooth: true,
                         offset: -80
                       });
                       setMenuOpenState(!menuOpenState)
                     }}
                   >事例</a>
                 </MenuItem>
                 <MenuItem className="menu-item" >
                   <a 
                     onClick={()=>{
                       scroller.scrollTo('test3',{
                         duration: 500,
                         smooth: true,
                         offset: -70
                       });
                       setMenuOpenState(!menuOpenState)
                     }}
                   >イベント概要</a>
                  </MenuItem>
                  <MenuItem className="menu-item" >
                    <a 
                     onClick={()=>{
                       scroller.scrollTo('test4',{
                         duration: 500,
                         smooth: true,
                         offset: -140
                       });
                       setMenuOpenState(!menuOpenState)
                     }}
                    >料金</a>
                  </MenuItem>
                  <MenuItem className="menu-cta">
                    <Box3 href="https://myasp.pajaposs.com/p/r/GNrCz3ps" style={{textDecoration: "none"}}>
                      <Text3>エントリー</Text3><Icon3><ArrowForwardIcon /></Icon3>
                    </Box3>
                  </MenuItem>
                </Menu>
              </StyledMenu>
            </MediaQuery>
          </Right>
        </Nav>
      </StickStyle>
      <Flash><p style={{color: "white", margin: "auto", paddingTop: "20px"}}>こちらのイベントのお申込みは終了いたしました。</p></Flash>
      <Main style={{maxWidth: "1280px",margin: "auto"}}>
        <First/> 
        <Element name="test1" className="element"><Event /></Element>
        <Profile/>
        <Element name="test3" className="element"><Feature /></Element>
        <Partner />
        <Element name="test2" className="element"><Clients /></Element>
        <Matters /> 
        <Element name="test4" className="element"><Charge /></Element>
        <Flow />
        <CTA />
        <People />
        <Books />
        <QandA />
        <WhatIsTeamLink />
      </Main>
      <Footer />
      <MediaQuery maxWidth={768}>
        <StyledSticky style={{transform: "none"}} topOffset={680}>
          <Box2 href="https://myasp.pajaposs.com/p/r/GNrCz3ps" style={{textDecoration: "none"}}>
            <Text2>エントリー</Text2><Icon2><ArrowForwardIcon /></Icon2>
          </Box2>
        </StyledSticky>
      </MediaQuery>
    </Whole>
  );
}

export default App;

const Flash = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ed4956;
  text-align: center;
`;

const Whole = styled.div`
    overflow:hidden;
    font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Main = styled.div`
    max-width: 1280px;
    margin: auto;
`;

const Nav = styled.div`
  z-index: 3000;
  height: 80px;
  width: 100% !important;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #C0C0C0;
  background-color: white;
  font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  @media (max-width: 768px) {
      flex-flow: column;
      height: 50px;
      margin: 0;
  }
`;

const Img = styled.div`
   @media (max-width: 768px) {
       height: 50px;
       margin-bottom: 10px;
   }
`;

const LogoImg = styled.img`
   height: 80%;
   margin-top: 10% 0 10% 20px;
   
`;

const Right = styled.div`
   width: 80%;
   display: flex;
   justify-content: flex-end;
   @media (max-width: 768px) {
     width: 100%;
   }
`;

const Table = styled.div`
  height: 100%;
  display: table;
  justify-content: flex-end;
  @media (max-width: 768px) {
       width: 100%;
       display: flex;
       flex-flow: column;
   }
`;

const HeaderItem = styled.div`
  width: 200px;
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
`;

const StyledMenu = styled.div`
  .open_button button{
    width: 50px !important;
    height: 50px !important;
    right: 0% !important;
    top: 0% !important;
  }
  .bm-burger-button {
    position: absolute !important;
    width: 50px !important;
    height: 50px !important;
    right: 0% !important;
    top: 0% !important;
  }
  .bm-menu-wrap {
     position: fixed;
     top: 50px !important;
     width: 100% !important;
     height: 100% !important;
     z-index: 5000 !important;
  }
  .bm-item-list {
     position: fixed;
     top: 0px !important;
     width: 100% !important;
     height: 1000px !important;
     z-index: 5000 !important;
     background-color: white !important;
  }
  .bm-menu {
      width: 50% !important;
      z-index: 5000 !important;
      overflow: hidden !important;
  }
  .bm-cross {
      background-color: black !important;
      height: 40px !important;
      right: 3px;
      top: -50px;
  }
  .bm-cross-button {
      z-index: 5002 !important;
      
  }
  #react-burger-cross-btn {
      top: -50px !important;
      width: 50px !important;
      height: 50px !important;
      left: -20px !important;
  }
  .menu-cta {
      width: 80%;
      margin: 0 10%;
  }
`;

const MenuItem = styled(HeaderItem)`
   margin-left: 20px;
   height: 50px;
   background-color: white;
   font-weight: 600;
   z-index: 110 !important;
   cursor:pointer;
   padding-top: 20px !important;
`;

const Entry = styled.button`
   border: none;
   border-radius: 5px;
   height: 48px;
   width: 250px;
   margin: 16px 20px 16px 0;
   background-color: #0095f6;
   cursor: pointer;
   z-index: 2900 !important;
`;

const Box = styled.a`
   display: flex;
`;

const MenuText = styled.h2`
   text-align: center;
   font-weight: 700;
   font-family: "inherit";
   font-size: 18px;
`;

const Text = styled.h3`
   font-weight: 700;
   text-align: center;
   margin: auto;
   color: white !important;
`;

const Icon = styled(ArrowForwardIcon)`
   margin: 10px 0 10px 10px;
   color: white !important;
`;


const StickStyle = styled(Sticky)`
  .sticky{
    z-index:3000;
  }
  
  &&& div {
      transform:none !important;
  }
`;

const StyledSticky = styled(Sticky)`
   z-index: 3000;
   &&& div {
      transform:none !important;
  }
`;

const StyledAnimated = styled.div`
   .animate__animated.animate__slideInUp {
     --animate-duration: 2s;
   }
`;

const Box2 = styled.a`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  background-color: #0095f6;
  bottom: 0;
  left: 0;
  top: auto;
  right: auto;
  cursor: pointer;
  border: none;
  z-index: 2000 !important;
`;

const Box3 = styled.a`
   display: flex;
   justify-content: center;
   cursor: pointer;
   border: none;
   border-radius: 20px;
   z-index: 5002 !important;
   width: 100% !important;
   background-color: #0095f6;
`;

const Text2 = styled.h2`
   font-weight: 700;
   text-align: center;
   margin-top: 20px;
   color: white;
`;

const Text3 = styled(Text2)`
`;

const Icon2 = styled(ArrowForwardIcon)`
   font-size: 45px !important;
   margin: 15px 0 0 5px;
   z-index: 3001;
   color: white !important;
`;

const Icon3 = styled(Icon2)`
`;