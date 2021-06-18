import styled from 'styled-components'
import Arrow from '../images/Arrow.png'

const CTA = () => {
    return (
        <>
          <CallToAction>
            <Message>
              15000社の社長の中から<br/>
              あなたに合った企業を<br/>
              紹介してもらえませんか？
            </Message>
            <Icon src={Arrow} alt="Arrow"></Icon>
            <Message>
              参加費用5000円<br/>
              （TeamLink有料会員は無料）
            </Message>
            <Cta>今すぐ参加</Cta>
          </CallToAction>
        </>
    )
}

export default CTA

const CallToAction = styled.div`
   text-align: center;
   padding-bottom: 20px;
   margin-bottom: 60px;
   font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Message = styled.h2`
   font-weight: 700;
`;

const Icon = styled.img`
`;

const Cta = styled.button`
  　background-color: #0095f6;
  　color: white;
  　font-weight: 700;
  　font-size: 24px;
  　padding: 12px 48px 12px 48px;
  　border: none;
  　border-radius: 5px;
`;