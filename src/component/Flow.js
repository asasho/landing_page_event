import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ComputerIcon from '@material-ui/icons/Computer';
import SquareIcon from './SquareIcon'
import MediaQuery from 'react-responsive'

const Feature = () => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 60,
      swwipeToSlide: true,
    };
    return(
        <>
         <Page>
          <Title><SquareIcon/>お申込みから参加までの流れ</Title>
          <MediaQuery minWidth={768}>
            <Items>
              {items.map((item) => 
                <Item key={item.id}>
                  <Logo>{item.icon}</Logo>
            　     <Step>
                    <Num>{item.id}.</Num>
                    <StepTitle>{item.title}</StepTitle>
                  </Step>
                  <Content>{item.content}</Content>
                </Item>
              )}
            </Items>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
              <StyledSlider {...settings}>
                {items.map((item) => 
                  <Item key={item.id}>
                    <Logo>{item.icon}</Logo>
            　       <Step>
                      <Num>{item.id}.</Num>
                      <StepTitle>{item.title}</StepTitle>
                    </Step>
                    <Content>{item.content}</Content>
                  </Item>
                )}
              </StyledSlider>
          </MediaQuery>
         </Page>
        </>
    )
}

const items = [
    {id: 1, icon: <BorderColorIcon style={{fontSize: 80}} />, title: "申し込み", content: "申し込み時に入金が必要になります。申し込み人数に限りがありますので、こちらからお申込みください"},
    {id: 2, icon: <DescriptionOutlinedIcon style={{fontSize: 80}} />, title: "提案シートを提出", content: "自社のサービスの提案シートを運営事務局に提出します。自社のサービスの内容、どんな企業を紹介して欲しいかなどを書いてください（※後日メールにて送付します）"},
    {id: 3, icon: <ComputerIcon style={{fontSize: 80}} />, title: "参加", content: "イベントの時間になったら当日zoomにてイベントに参加します。"}
]

export default Feature;

const Page = styled.div`
   margin: 120px 0 120px 0;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Title = styled.h1`
   text-align: center;
   font-weight: 700;
   font-family: "inherit";
   @media (max-width: 768px) {
       font-size: 24px;
   }
`;

const Items = styled.div`
   display: flex;
   justify-content: center;
   
`;

const Item = styled.div`
   width: 20%;
   margin: 0 2% 40px 2%;
   @media (max-width: 768px) {
       flex-flow: column;
       width: 100%;
       margin: auto;
       padding: 0 30% 0 30%;
   }
`;

const Logo = styled.div`
   text-align: center;
   width: 50%;
   margin: 0 25% 0 25%;
`;

const Step = styled.div`
   text-align: center;
   margin-top: 0;
`;

const Num = styled.h1`
   text-align: center;
   font-size: 60px;
   margin: auto;
   @media (max-width: 768px) {
       font-size: 36px;
   }
`;

const StepTitle = styled.h2`
   font-weight: 600;
   @media (max-width: 768px) {
       font-size: 18px;
   }
`;

const Content = styled.h3`
   font-weight: 600;
   padding-left: 20px;
   color: gray;
   font-family: "inherit";
   @media (max-width: 768px) {
     font-size: 16px;       
   }

`;

const StyledSlider = styled(Slider)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .slick-prev{
      left: 25px !important;
      background-color: black !important;
      z-index: 10 !important; 
  }
  .slick-next{
      right: 25px !important;
      background-color: black !important;
  }
`;