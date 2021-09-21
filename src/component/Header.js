import React, { useState } from 'react';
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import Hamburger from 'hamburger-react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TeamLink from '../images/TeamLink_logo.png'
import { useScroll } from 'react-scroll-hooks';
import First from './First'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const Link      = Scroll.Link;
　const Element   = Scroll.Element;
　const Events    = Scroll.Events;
　const scroll    = Scroll.animateScroll;
　const scrollSpy = Scroll.scrollSpy;
  
  const scrollTop = () => {
    scroll.scrollToTop();
  }
  
  const scrollBottom = () => {
    scroll.scrollToBottom();
  }
  
  const scrollMore = () => {
    scroll.scrollToMore(100);
  }
  
  return (
    <>
      <Nav>
        <LogoImg src={TeamLink} alt="logo" />
        <Right>
          <MediaQuery minWidth={768}>
            <Table>
              <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>特徴</Link>
              <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>アライアンス<br/>事例</Link>
              <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>イベント概要</Link>
              <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>料金</Link>
              <HeaderItem>特徴</HeaderItem>
              <HeaderItem>アライアンス<br/>事例</HeaderItem>
              <HeaderItem>イベント概要</HeaderItem>
              <HeaderItem>料金</HeaderItem>
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