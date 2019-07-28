import * as React from 'react';
import styled from 'styled-components';
import imgPlayStore from 'assets/play-store@2x.png';
import imgAppStore from 'assets/app-store@2x.png';

interface Award {
  id: string;
  logo: string;
  alt: string;
  name: string;
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

const AwardName = styled.div`
  white-space: pre;
`;

const awards: Award[] = [
  {
    id: 'palystore',
    logo: imgPlayStore,
    alt: '플레이스토어 올해의 앱 최우수상 이미지',
    name: '2018 구글 플레이스토어\n올해의 앱 최우수상 수상',
  },
  {
    id: 'appstore',
    logo: imgAppStore,
    alt: '앱스토어 이미지',
    name: '2018 애플 앱스토어\n오늘의 여행앱 선정',
  },
];

function makeAwardToNode({ id, logo, alt, name }: Award): JSX.Element {
  return (
    <AwardsItem key={id}>
      <AwardsLogo src={logo} alt={alt} />
      <AwardName>
        {name}
      </AwardName>
    </AwardsItem>
  );
}

const Awards: React.FunctionComponent = () => {
  return (
    <AwardsContainer>
      {awards.map(makeAwardToNode)}
    </AwardsContainer>
  );
};

export default Awards;
