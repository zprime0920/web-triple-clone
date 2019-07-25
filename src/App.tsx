import React from 'react';
import imgTriple from 'assets/triple@2x.png';
import imgPlayStore from 'assets/play-store@2x.png';
import imgAppStore from 'assets/app-store@2x.png';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1040px;
  height: 552px;
  padding-top: 150px;
`;

const ContentLogo = styled.div`
  position: relative;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
  font-size: 15px;
`;

const ImgLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const MetricsContainer = styled.div`

`;

const MetricItem = styled.div`
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -1px;
`;

const AwardsContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;

const AwardsItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 39px;
  height: 54px;
  line-height: 22px;
  color: rgba(58, 58, 58, 0.8);
  font-size: 14px;
  font-weight: bold;
`;

const AwardsLogo = styled.img`
  margin-right: 8px;
  width: 54px;
  height: 54px;
`;

const App: React.FC = () => {
  return (
    <SectionContainer>
      <ContentLogo>
        <ImgLogo
          src={imgTriple}
          alt="트리플 이미지"
        />
        2019년 5월 기준
      </ContentLogo>
      <div>
        <MetricsContainer>
          <MetricItem>
            <strong>410만 명</strong>의 여행자
          </MetricItem>
          <MetricItem>
            <strong>40만 개</strong>의 여행 리뷰
          </MetricItem>
          <MetricItem>
            <strong>250만 개</strong>의 여행 일정
          </MetricItem>
        </MetricsContainer>
        <AwardsContainer>
          <AwardsItem>
            <AwardsLogo src={imgPlayStore} alt="플레이스토어 올해의 앱 최우수상 이미지" />
            <div>
              2018 구글 플레이스토어<br/>
              올해의 앱 최우수상 수상
            </div>
          </AwardsItem>
          <AwardsItem>
            <AwardsLogo src={imgAppStore} alt="앱스토어 이미지" />
            <div>
              2018 애플 앱스토어<br/>
              오늘의 여행앱 선정
            </div>
          </AwardsItem>
        </AwardsContainer>
      </div>
    </SectionContainer>
  );
};

export default App;
