import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SquareIcon from './SquareIcon'

const WhatIsTeamLink = () => {
    return (
        <>
          <Page>
            <Title><SquareIcon/>Team Linkとは</Title>
            <MainText>
               Team Linkとは、経営層の課題を持つ社長に直接提案することができるSNSサービスです。<br/>
               社長に直接提案できるため、商談までの流れがスムーズに行われ、集客のコストを削減することができます。
            </MainText>
            <TeamLink><Text>Team Linkについて</Text><Icon><ArrowForwardIosIcon /></Icon></TeamLink>
          </Page>
        </>
    )
}

export default WhatIsTeamLink

const Page = styled.div`
   margin: 0 15% 120px 15%; 
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   text-align: center;
   box-shadow: 0 0 2px gray;
   border-radius: 10px;
   padding: 20px 20px 40px 20px;
   @media (max-width: 768px) {
       padding: 20px 20px 40px 20px;
       margin: 0 10% 120px 10%; 
   }
`;

const Title = styled.h1`
   font-weight: 700;
   @media (max-width: 768px) {
       font-size: 24px;
       
   }
`;

const MainText = styled.h2`
   text-align: center;
   color: gray;
   font-family: "inherit";
   @media (max-width: 768px) {
       font-size: 12px;
   }
`;

const TeamLink = styled.button`
  　background-color: #0095f6;
  　display: flex;
  　justify-content: center;
  　border: none;
  　border-radius: 40px;
  　width: 100%;
  　cursor: pointer;
  　margin: auto;
  　@media (max-width: 768px) {
  　    padding: 6px 24px 6px 24px;
  　}
`;

const Text = styled.h3`
   color: white;
   font-weight: 700
   @media (max-width: 768px) {
  　   font-size: 12px;
   }
`;

const Icon = styled(ArrowForwardIosIcon)`
   margin: 10px 0 5px 10px;
   color: white !important;
`;
