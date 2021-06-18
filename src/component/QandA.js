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
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const QandA = () => {
    const [isShow, setIsShow] = useState(false);
    
    return (
        <>
          <Page>
           <Title><SquareIcon/>よくある質問</Title> 
           <Accordion allowZeroExpanded>
            {items.map((item) => (
                <AccordionItem key={item.id}>
                  <Box>
                    <AccordionItemHeading>
                        <AccordionItemButton onClick={()=>setIsShow(prevIsShow=>!prevIsShow)} >
                          <QBox>
                            <Question>
                              <QNum>Q{item.id}.</QNum>
                              <QContent>{item.heading}</QContent>
                            </Question>
                            <Icon><ExpandMoreIcon viewBox="5 0 24 24" style={{fontSize: 50, width: 40}}/></Icon>
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
           </Accordion>
          </Page>
        </>
    )
}

const items = [
    {id: 1, heading: "AAA", content: "aaa" },
    {id: 2, heading: "BBB", content: "bbb" },
    {id: 3, heading: "CCC", content: "ccc" },
    {id: 4, heading: "DDD", content: "ddd" },
    {id: 5, heading: "EEE", content: "eee" }
]

export default QandA

const Page = styled.div`
   margin-bottom: 120px;
`;

const Title = styled.h1`
   font-weight: 700;
   text-align: center;
   @media (max-width: 768px) {
       font-size: 24px;
   }
`;

const Box = styled.div`
   border: solid 4px black;
   border-radius: 10px;
   margin: 20px 25% 0 25%;
   @media (max-width: 768px) {
       width: 80%;
       margin: 20px 10% 0 10%;
   }
`;

const QBox = styled.div`
   display: flex;
   width: 100%;
   height: 50px;
   justify-content: space-between;
`;

const Icon = styled.div`
   height: 100%;
`;

const Question = styled.div`
   display: flex;
   height: 100%;
   padding: 0 0 20px 5%;
   @media (max-width: 768px) {
       width: 80%;
       margin: 0 10% 0 10%;
       padding: 5px;
   }
`;

const QNum = styled.h2`
   margin: 0;
   padding-top: 8px;
   @media (max-width: 768px) {
       font-size: 18px;
       
   }
`;

const QContent = styled.h2`
    margin: 0;
    padding: 8px 0 0 20px;
    @media (max-width: 768px) {
       font-size: 18px;
    }
`;

const ABox = styled(QBox)`
   margin-top: 0;
   border-top: 2px solid gray;
`;

const Answer = styled(Question)`
    margin-top: 0
`;

const ANum = styled(QNum)`
`;

const AContent = styled(QContent)`
`;
