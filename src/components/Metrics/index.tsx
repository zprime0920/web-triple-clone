import * as React from 'react';
import styled from 'styled-components';

interface MetricsProps {
}

const MetricsContainer = styled.div`

`;

const MetricItem = styled.div`
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -1px;
`;

const Metrics: React.FunctionComponent<MetricsProps> = () => {
  return (
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
  );
};

export default Metrics;
