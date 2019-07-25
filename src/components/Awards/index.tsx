import * as React from 'react';
import styled from 'styled-components';
import imgPlayStore from 'assets/play-store@2x.png';
import imgAppStore from 'assets/app-store@2x.png';

interface AwardsProps {
}

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

const Awards: React.FunctionComponent<AwardsProps> = () => {
  return (
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
  );
};

export default Awards;
