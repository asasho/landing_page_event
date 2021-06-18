import React, { useState } from 'react';
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import Hamburger from 'hamburger-react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TeamLink from './images/TeamLink_logo.png'
import Top from './component/Top'
import CTA from './component/CTA'
import Footer from './component/Footer'
import QandA from './component/QandA'

import Feature from './component/Feature'
import Matters from './component/Matters'
import Clients from './component/Clients'
import Charge from './component/Charge'
import Partner from './component/Partner'
import Flow from './component/Flow'

import Sticky from 'react-sticky-el';

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const Link      = Scroll.Link;
　const Element   = Scroll.Element;
　const scrollMore = (length) => {
　  scroll.scrollMore(length);
　}
  
  return (
    <>
      <StickStyle topOffset={680}>
        <Nav>
          <LogoImg src={TeamLink} alt="logo" />
          <Right>
            <MediaQuery minWidth={768}>
              <Table>
                <HeaderItem><Link activeClass="active" to="test1" smooth={true} offset={800} duration={500}>特徴</Link></HeaderItem>
                <HeaderItem><Link activeClass="active" to="test2" smooth={true} offset={-100} duration={500}>アライアンス<br/>事例</Link></HeaderItem>
                <HeaderItem><Link activeClass="active" to="test3" smooth={true} offset={-150} duration={500}>イベント概要</Link></HeaderItem>
                <HeaderItem><Link activeClass="active" to="test4" smooth={true} offset={-120} duration={500}>料金</Link></HeaderItem>
              </Table>
            </MediaQuery> 
            <MediaQuery maxWidth={768}>
              <Table><Hamburger toggled={isOpen} toggle={setOpen} /></Table>
            </MediaQuery>
            <MediaQuery minWidth={768}>
              <Entry>
                <Box>
                  <Text>エントリー</Text>
                  <Icon><ArrowForwardIcon /></Icon>
                </Box>
              </Entry>
            </MediaQuery>
          </Right>
        </Nav>
      </StickStyle>
      <Element name="test1" className="element"><Top /></Element>
      <Element name="test3" className="element"><Feature /></Element>
      <Partner />
      <Element name="test2" className="element"><Clients /></Element>
      <Matters />
      <Element name="test4" className="element"><Charge /></Element>
      <Flow />
      <CTA />
      <QandA />  
      <Footer />
      <MediaQuery maxWidth={768} >
        <CtaBack></CtaBack>
        <Box2><Text2>エントリー</Text2><Icon2><ArrowForwardIcon /></Icon2></Box2>
      </MediaQuery>
    </>
  );
}

export default Header;

const Nav = styled.div`
  z-index: 3000;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #C0C0C0;
  background-color: white;
  font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  @media (max-width: 768px) {
      height: 50px;
      margin: 0;
  }
`;

const LogoImg = styled.img`
   height: 100%;
   @media (max-width: 768px) {
     margin: 0 0 20px 0;
   }
`;

const Right = styled.div`
   width: 80%;
   display: flex;
   justify-content: flex-end;
   @media (max-width: 768px) {
     flex-flow: row-reverse;
     justify-content: flex-start;
   }
`;

const Table = styled.div`
  height: 100%;
  display: table;
  justify-content: flex-end;
`;

const HeaderItem = styled.div`
  width: 200px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-weight: 700;
  font-family: "inherit";
  &:hover {
    border-bottom: solid 4px #0095f6;
  }
`;


const Entry = styled.button`
   border: none;
   box-shadow: 0 0 8px;
   height: 60%;
   width: 200px;
   margin: 16px 20px 16px 0;
   background-color: white;
`;

const Box = styled.div`
   display: flex;
`;

const Text = styled.h3`
   font-weight: 700;
   text-align: center;
   margin: auto;
`;

const Icon = styled(ArrowForwardIcon)`
   margin: 10px 0 10px 10px;
`;


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

const Box2 = styled.div`
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

const Text2 = styled.h2`
   font-weight: 700;
   text-align: center;
   margin-top: 20px;
   z-index: 3001;
`;

const Icon2 = styled(ArrowForwardIcon)`
   font-size: 45px !important;
   margin: 10px 0 0 5px;
   z-index: 3001;
`;