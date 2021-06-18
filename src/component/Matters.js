import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MediaQuery from 'react-responsive'
import SquareIcon from './SquareIcon'

const Matters = () => {
    const settings = {
      rows: 1,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 60,
      swwipeToSlide: true,
    };
    return (
        <>
          <MattersPage>
            <Title><SquareIcon/>過去に池本が紹介した案件</Title>
            <MediaQuery minWidth={768}>
              <Box>
                {items.map((item) => 
                  <Matter key={item.id}>
                    <Name>{item.name}</Name>
                    <HashTag>
                      <Tag>{item.tag1}</Tag><Tag>{item.tag2}</Tag>
                    </HashTag>
                  </Matter>
                )}
              </Box>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
              <StyledSlider {...settings}>
                {items.map((item) => 
                  <Matter key={item.id}>
                    <Name>{item.name}</Name>
                    <HashTag>
                      <Tag>{item.tag1}</Tag><Tag>{item.tag2}</Tag>
                    </HashTag>
                  </Matter>
                )}
              </StyledSlider>
            </MediaQuery>
          </MattersPage>
        </>
    )
}

const items = [
    {id: 1, name: "整骨院のLP作成および，PPC運用", tag1: "#LP作成", tag2: "#PPC運用"},
    {id: 2, name: "新規事業（美容商品の通販）のプロジェクトマネジメント", tag1: "#新規事業", tag2: "#プロジェクトマネジメント"},
    {id: 3, name: "採用に繋がるホームページ制作", tag1: "#ホームページ制作", tag2: "#採用ブランディング"},
    {id: 4, name: "職人に特化したマッチングアプリ", tag1: "#システム開発", tag2: "#マッチングアプリ"},
    {id: 5, name: "化粧品会社のYouTubeコンサルティング", tag1: "#YouTubeコンサルティング", tag2: "#webマーケティング"},
    {id: 6, name: "食品会社のオンラインショップのPPC運用", tag1: "#PPC運用", tag2: "#リスティング広告"}
]

export default Matters

const MattersPage = styled.div`
   margin: 120px 0 120px 0;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   @media (max-width: 768px) {

   }
`;

const Title = styled.h1`
   font-weight: 700;
   text-align: center;
   font-family: sans-serif;
   @media (max-width: 768px) {
       font-size: 24px;
   }
`;

const Box = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   @media (max-width: 768px) {
       font-size: 24px;
       flex-wrap: no-wrap;
       z-index: 1 !important; 
   }
`;

const Matter = styled.div`
   width: 25%;
   margin: 0 2% 40px 2%;
   height: 120px;
   box-shadow: 0 0 8px gray;
   border-radius: 10px;
   @media (max-width: 768px) {
       font-size: 16px;
       height: 140px;
       width: 270px !important;
       margin: 0 20px !important;
   }
`;

const  Name = styled.p`
   padding: 0 10px 0 10px;
`;

const HashTag = styled.div`
   display: float;
   flex-wrap: wrap;
`;

const Tag = styled.p`
   justify-content: start;
   background-color: #707070;
   color: white;
   padding: 5px;
   margin: 0 5px 5px 5px;
   border-radius: 5px;
`;

const StyledSlider = styled(Slider)`
  display: flex !important;
  justify-content: space-between !important;
  .slick-prev{
      left: 25px !important;
      z-index: 10 !important;
  }
  .slick-next{
      right: 25px !important;
  }
  .slick-track{
      display:flex !important;
       width: 100% !important;
  }
  .slick-slide{
      padding: 5px;
  }
`;