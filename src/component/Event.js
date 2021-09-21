import styled from 'styled-components'
import SquareIcon from './SquareIcon'

const Event = () => {
    return (
        <>
          <EventPage>
            <Title><SquareIcon/>事業提携マッチングイベントとは</Title>
            <EventContent>
              400社以上の取引実績を持つ池本克之に<br/>
              自社事業を提案することで<br/>
              貴社にあった企業を紹介してくれるイベントです
            </EventContent>
          </EventPage>
        </>
    )
}

export default Event

const EventPage = styled.div`
   margin: 120px 0 120px 0; 
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Title = styled.h1`
   text-align: center;
   @media (max-width: 768px) {
       font-size: 24px;
   }
`;

const EventContent = styled.h2`
   text-align: center;
   color: gray;
   font-family: "inherit";
   @media (max-width: 768px) {
       font-size: 18px;
   }
`;

