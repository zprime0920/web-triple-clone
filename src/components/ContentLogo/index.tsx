import * as React from 'react';
import styled from 'styled-components';
import imgTriple from 'assets/triple@2x.png';

const ContentLogoWrapper = styled.div`
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

const ContentLogo: React.FunctionComponent = () => {
  return (
    <ContentLogoWrapper>
      <ImgLogo
        src={imgTriple}
        alt="트리플 이미지"
      />
      2019년 5월 기준
    </ContentLogoWrapper>
  );
};

export default ContentLogo;
