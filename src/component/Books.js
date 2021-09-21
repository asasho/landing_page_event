import styled from 'styled-components'
import BooksPc from '../images/BooksPc.png'

const Books = () => {
    return (
        <>
          <Page>
            
            <Right>
               <Author>著者</Author>
               <Box>
               　<Book>出社しなくても最高に評価される人がやっていること</Book>
                 <Book>その「任せ方」、もう通用しなくて当然です。</Book>
                 <Book>「すぐやるチーム」をつくるたった1つの考え方</Book>
                 <Book>今いる仲間で「結果が出る会議」をつくる</Book>
                 <Book>今いる仲間で「最強のチーム」をつくる</Book>
               </Box>
            </Right>
            <Img><Photo src={BooksPc} alt="BooksPc" /></Img>
          </Page>
        </>
    )
}

export default Books

const Page = styled.div`
   display: flex;
   justify-content: center;
   flex-flow: row-reverse;
   width: 100%;
   margin: 0 0 40px 0;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   @media (max-width: 768px) {
       flex-flow: column;
       margin-top: 0;
    
   }
`;

const Img = styled.div`
   width: 50%;
   margin-right: 50px;
   @media (max-width: 768px) {
       width: 80%;
       margin: 20px 10%;
       border: none;
   }
`;

const Photo = styled.img`
   width: 100%;
`;

const Right = styled.div`
    width: 40%;
    @media (max-width: 768px) {
        width: 90%;
        margin: 0 5%;
    }
`;

const Author = styled.h1`
   font-weight: 700;
   @media (max-width: 768px) {
       font-size: 24px;
       text-align: center;
   }
`;

const Box = styled.ul`
   padding-left: 50px;
`;

const Book = styled.li`
   font-size: 24px;
   font-weight: 600;
   @media (max-width: 768px) {
       font-size: 18px;
   }
`;