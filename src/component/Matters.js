import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MediaQuery from 'react-responsive'
import SquareIcon from './SquareIcon'

const Matters = () => {
    const settings = {
      rows: 1,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      
      swwipeToSlide: true,
    };
    return (
        <>
          <MattersPage>
            <Title><SquareIcon/>過去に池本が紹介した案件</Title>
            <MediaQuery minWidth={769}>
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
    {id: 1, name: "ビジネス向け動画プラットフォームの開発", tag1: "#システム開発", tag2: "#動画配信システム"},
    {id: 2, name: "職人に特化したマッチングアプリ", tag1: "#システム開発", tag2: "#マッチングアプリ"},
    {id: 3, name: "採用に繋がるホームページ制作", tag1: "#ホームページ制作", tag2: "#採用ブランディング"},
    {id: 4, name: "新規事業（美容商品の通販）のプロジェクトマネジメント", tag1: "#新規事業", tag2: "#プロジェクトマネジメント"},
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
   height: 140px;
   box-shadow: 0 0 8px gray;
   border-radius: 10px;
   @media (max-width: 1090px) {
       height: 180px;
   }
   @media (max-width: 768px) {
       font-size: 16px;
       margin: 0;
       height: 150px;
       width: 320px;
    }
`;

const  Name = styled.p`
   padding: 0 10px 0 10px;
`;

const HashTag = styled.div`
   display: flex;
   flex-wrap: wrap;
`;

const Tag = styled.p`
   justify-content: start;
   background-color: #707070;
   flex-wrap: wrap;
   color: white;
   padding: 5px;
   margin: 0 5px 5px 5px;
   border-radius: 5px;
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

    
  }
`;