import React from "react";
import MediaQuery from 'react-responsive'
import Slider from "react-slick"
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Step1 from '../images/Step1.jpeg'
import Step2 from '../images/Step2.jpeg'
import Step3 from '../images/Step3.jpeg'
import SquareIcon from './SquareIcon'

const Feature = () => {
    const settings = {
    rows:1,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      swwipeToSlide: true,
    };
    return(
        <>
         <FeaturePage>
          <Title><SquareIcon/>イベントの概要</Title>
          <MediaQuery minWidth={769}>
            <div>
              {items.map((item) =>
                <Item key={item.id}>
                  <ImgPc>{item.img}</ImgPc>
            　     <Right>
                    <Step>STEP{item.id}</Step>
                    <StepTitle>{item.title}</StepTitle>
                    <Content>{item.text}</Content>
                  </Right>
                </Item>
              )}
            </div>  
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <StyledSlider {...settings}>
              {itemSps.map((itemSp) =>
                <Item key={itemSp.id}>
                  <Text>
                    <Step>STEP{itemSp.id}</Step>
                    <StepTitle>{itemSp.title}</StepTitle>
                    <Content>{itemSp.text}</Content>
                  </Text>
                  <Img>{itemSp.img}</Img>
                </Item>
              )}
            </StyledSlider>
           </MediaQuery>
         </FeaturePage>
        </>
    )
}

const items = [
    {id: 1, img: <img src={Step1} alt="step1" width="100%" /> , title: "共通のテーマで交流", text: "まずは、共通の話題について話していただきます。"},
    {id: 2, img: <img src={Step2} alt="Step2" width="100%" />, title: "自社事業を池本克之に提案", text: "5分程度で自社事業について池本克之に提案していただきます。"},
    {id: 3, img: <img src={Step3} alt="Step3" width="100%" />, title: "池本克之が貴社にあった企業・案件を紹介", text: "池本克之が15000社の社長リストの中からあなたに合った社長や案件を紹介してくれます。MTGの設定までフォローします。"}
]

const itemSps = [
    {id: 1, img: <img src={Step1} alt="step1" width="100%" margin-right="5%" /> , title: "共通のテーマで交流", text: "まずは、共通の話題について話していただきます。"},
    {id: 2, img: <img src={Step2} alt="Step2" width="100%" margin-right="5%" />, title: "自社事業を池本克之に提案", text: "5分程度で自社事業について池本克之に提案していただきます。"},
    {id: 3, img: <img src={Step3} alt="Step3" width="100%" margin-right="5%" />, title: "池本克之が貴社にあった企業・案件を紹介", text: "池本克之が15000社の社長リストの中からあなたに合った社長や案件を紹介してくれます。MTGの設定までフォローします。"}
]

export default Feature;

const FeaturePage = styled.div`
   margin: 120px 0 120px 0;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   @media (max-width: 768px) {
       width: 100%;
   }
`;

const Title = styled.h1`
   text-align: center;
   font-weight: 700;
   @media (max-width: 768px) {
       font-size: 24px;
   }
`;

const Item = styled.div`
   display: flex;
   margin: 20px 10% 20px 20%;
   @media (max-width: 768px) {
       width: 80%;
       margin:20px 10% 20px 10%;
   }
`;

const Right = styled.div`
   width: 70%;
`;

const Step = styled.h2`
   width: 100px;
   text-align: center;
   color: white;
   background-color: #0095f6;
   border-radius: 5px;
   @media (max-width: 1170px) {
       font-size: 18px;
   }
`;

const StepTitle = styled.h2`
   font-weight: 600;
   @media (max-width: 1170px) {
       font-size: 18px;
   }
`;

const Content = styled.h3`
   font-weight: 600;
   color: gray;
   @media (max-width: 1170px) {
       font-size: 16px;
   }
`;

const Text = styled.div`
   height: 240px;
`;

const ImgPc = styled.div`
   width: 30%;
   margin-right: 5%;
`;

const Img = styled.div`
  z-index: 1;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  display: flex;
  justify-content: space-between !important;
  .slick-slide{
      margin:20px;
  }
  
  .slick-track{
      display:flex !important;
  }
`;
