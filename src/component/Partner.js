import styled from 'styled-components'
import Partners from '../images/Partners.png'
import SquareIcon from './SquareIcon'

const Partner = () => {
    return (
        <>
          <PartnerPage>
          <Title><SquareIcon/>池本と関わりのある企業（※一部）</Title>
          <Photo src={Partners} alt="Partnership" />
          </PartnerPage>
        </>
    )
}

export default Partner

const PartnerPage = styled.div`
   margin: 120px 0 120px 0;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Title = styled.h1`
   font-weight: 700;
   text-align: center;
   @media (max-width: 768px){
      font-size: 24px;   
   }
`;

const Photo = styled.img`
   display: block;
   margin: 0 5% 0 5%;
   width: 90%;   
`;