import styled from 'styled-components'

const Charge = () => {
    return (
        <>
          <ChargePage>
          <Title>料金</Title>
          <HowMach><Num>5,500</Num>円(税込)</HowMach>
          </ChargePage>
        </>
    )
}

export default Charge

const ChargePage = styled.div`
   margin: 120px 0 120px 0;
   text-align: center;
   font-family: sans-serif, "inherit";
`;

const Title = styled.h1`
   font-weight: 700;
`;

const HowMach = styled.h2`
   font-weight: 700;
`;

const  Num = styled.span`   
   font-size: 60px;
`;