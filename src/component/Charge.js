import styled from 'styled-components'
import SquareIcon from './SquareIcon'

const Charge = () => {
    return (
        <>
          <Page>
            <Title><SquareIcon/>料金</Title>
            <HowMach><Num>5,500</Num>円(税込)</HowMach>
          </Page>
        </>
    )
}

export default Charge

const Page = styled.div`
   margin: 120px 0 120px 0;
   text-align: center;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Title = styled.h1`
   font-weight: 700;
   @media (max-width: 768px) {
       font-size: 24px;
   }
`;

const HowMach = styled.h2`
   font-weight: 700;
   @media (max-width: 768px) {
       font-size: 18px;
   }
`;

const  Num = styled.span`   
   font-size: 60px;
`;