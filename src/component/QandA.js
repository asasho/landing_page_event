import React, {useState} from 'react';
import styled from 'styled-components'
import SquareIcon from './SquareIcon'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const QandA = () => {
    
    return (
        <>
          <Page>
           <Title><SquareIcon/>よくある質問</Title> 
           <StyledAccordion allowMultipleExpanded>
            {items.map((item) => (
                <AccordionItem key={item.id}>
                  <Box>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          <QBox>
                            <Question>
                              <QNum>Q{item.id}.</QNum>
                              <QContent>{item.heading}</QContent>
                            </Question>
                            
                          </QBox>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                       <ABox>
                         <Answer>
                           <ANum>A{item.id}.</ANum>
                           <AContent>{item.content}</AContent>
                         </Answer>
                       </ABox>
                    </AccordionItemPanel>
                  </Box>
                </AccordionItem>
            ))}
           </StyledAccordion>
          </Page>
        </>
    )
}

const items = [
    {id: 1, heading: "オンラインで参加する際にwindows、Macなどのパソコンの指定はありますか？", content: "いいえ。windows、Macどちらでも受講可能です。" },
    {id: 2, heading: "ポケットWifiの使用は可能ですか？", content: "いいえ。ポケットWifiでは回線が安定しない可能性があるため、ご自宅のWifiや優先LANがつながっているPCでご参加ください。" },
    {id: 3, heading: "イベントの参加に向けて事前に準備しておくことはありますか？", content: "はい。まず、当日までに業務提携の提案書と希望の業務提携先のリストを事務所に提出していただきます。また、当日は本番前にzoomの事前確認会に参加していただきます。" },
    {id: 4, heading: "支払い方法について教えてください", content: "お支払方法はクレジットカード払い（一括のみ）の対応になります。" },
    {id: 5, heading: "開始時間に遅れて参加しても大丈夫ですか？", content: "いいえ。参加される方々は「本気の方」です。従いまして、時間厳守でお願いいたします。" },
    {id: 6, heading: "どうしても予定があって参加できなくなった場合、キャンセルすることは可能でしょうか？", content: "いいえ。本イベントは少人数の限られた方しか参加できないがゆえ、参加される方々は「本気の方」であるといえます。従いましてアライアンスマッチングイベントの日程を最優先して頂きたく思います。また、支払い後の返金はいたいしかねます。" },
    {id: 7, heading: "社員を参加させて良いですか？", content: "はい、問題ありません。社員の方を含めた複数参加が可能です。また経営者の方の代理として社員の方に参加していただくことも可能です。" },
]

export default QandA

const Page = styled.div`
   margin-top: 120px;
   margin-bottom: 120px;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Title = styled.h1`
   font-weight: 700;
   text-align: center;
   @media (max-width: 768px) {
       font-size: 24px;
   }
`;

const StyledAccordion = styled(Accordion)`
   .accordion__button {
       background-color: white !important;
       width: auto !important;
       display: flex;
       flex-direction: row-reverse;
       :before {
           margin: 15px 12px 0 0;
           height: 16px;
           width: 16px;
           transform: rotate( 45deg);
       }
   }
   .accordion__button[aria-expanded='true']::before, .accordion__button[aria-selected='true']::before {
       transform: rotate( 225deg);
   }
   .accordion__item {
       border: none;
   }
   .accordion__button {
       border-radius: 5px;
   }
`;

const Box = styled.div`
   border: solid 4px black;
   border-radius: 10px;
   margin: 20px 25% 0 25%;
   @media (max-width: 1280px) {
       width: 80%;
       margin: 20px 10% 0 10%;
   }
`;

const QBox = styled.div`
   display: flex;
   width: 100%;
   height: auto;
   justify-content: space-between;
   cursor: pointer;
`;

const Icon = styled.div`
   height: 100%;
`;

const Question = styled.div`
   display: flex;
   height: 100%;
   padding: 0 0 20px 0;
   @media (max-width: 1280px) {
       width: 100%;
       margin: 0;
       padding: 5px;
   }
`;

const QNum = styled.h2`
   margin: 0 0 0 10px;
   padding-top: 8px;
   @media (max-width: 1280px) {
       font-size: 18px;
       margin: 0;
   }
`;

const QContent = styled.h3`
    margin: 0 10px 0 10px;
    padding: 8px 20px 0 20px;
    @media (max-width: 1280px) {
       font-size: 14px;
       margin: 0;
    }
`;

const ABox = styled(QBox)`
   margin-top: 0;
   border-top: 2px solid gray;
   cursor: text;
`;

const Answer = styled(Question)`
    margin-top: 0
`;

const ANum = styled(QNum)`
`;

const AContent = styled(QContent)`
`;
