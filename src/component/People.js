import styled from 'styled-components'
import President3 from '../images/President3.png'

const People = () => {
    return (
      <>
          <Page>
            <Right>
              <Photo src={President3} alt="president" />
            </Right>
            <Left>
              <ProfileEng>PROFILE</ProfileEng>
              <ProfileJpn>池本克之社長プロフィール</ProfileJpn>
              <MainText>
                400社以上ものコンサルティングをしてきた<br/>元ドクターシーラボ社長
              </MainText>
              <Content>
                  ノンバンク、海外ホテル事業、生命保険代理店営業を経験。<br/>
                  財務、マーケティング、セールス、人材教育などを体得する。<br/><br/>

                  その後、通信販売のベンチャー企業の経営に参画。それまでのノウハウを実践する。<br/><br/>

                  株式会社ドクターシーラボ移籍後、代表取締役として2003年3月ジャスダック店頭公開に貢献。<br/><br/>
                  
                  2003年11月ドクターシーラボを退任。<br/>
                  月商1億円に満たない時代から1年3ヶ月で月商7億円超に、さらに年商120億円企業へと成長させた。<br/><br/>

                  2004年3月　株式会社ネットプライス執行役員に就任。<br/>
                  公開企業のマネジメント経験を活かし、若いベンチャー企業の参謀役としてカスタマーサービス、<br/>
                  物流、CRM、仕入先開拓等の 機能を統括する。<br/><br/>

                  2004年7月にはマザーズ店頭公開。経営者として2度の株式公開を経験する。<br/>
                  その後、複数の企業経営を経て、現在は組織学習経営コンサルタントとして多くの企業の業績向上、<br/>
                  企業文化の発展をコンサルティングしている。<br/>
              </Content>
            </Left>
          </Page>
      </>
    )
}

export default People;

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


const Left = styled.div`
   z-index: 2;
   width: 60%;
   padding-top: 20px;
   margin-bottom: 50px;
   margin-right: 50px;
   @media (max-width: 1280px) {
       margin-top: 20px;
   }
   @media (max-width: 768px) {
       width: 90%;
       margin: 0;
       margin: 0 5% 0 5%;
   }
`;

const ProfileEng = styled.p`
   font-weight: 700;
`;

const ProfileJpn = styled.p`
   border-top: solid 1px gray;
`;

const MainText = styled.h1`
   font-weight: 700;
   @media (max-width: 1280px) {
       width: 100%;
       margin: 0;
       font-size: 24px;
   }
   @media (max-width: 768px) {
       font-size: 18px;
   }
`;

const Content = styled.p`
   margin: 20px 0 20px 0;
   @media (max-width: 1280px) {
       font-size: 14px;
   }
`;

const Right = styled.div`
   z-index: 1;
   width: 30%;
   margin-top: 30px;
   @media (max-width: 768px) {
       width: 100%;
       margin-top: 0;
       border: none;
   }
`;

const Photo = styled.img`
   width: 100%;
   height: auto;
   border: none;
   @media (max-width: 768px) {
       width: 60%;
       height: auto;
       margin: 0 20%;
   }
`;

