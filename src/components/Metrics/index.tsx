import * as React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

interface Metric {
  id: string;
  value: number;
  unit: string;
  description: string;
}

const MetricItem = styled.div`
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -1px;
`;

const metrics: Metric[] = [
  {
    id: 'traveler',
    value: 410,
    unit: '만 명',
    description: '의 여행자',
  },
  {
    id: 'review',
    value: 40,
    unit: '만 개',
    description: '의 여행 리뷰',
  },
  {
    id: 'itinerary',
    value: 250,
    unit: '만 개',
    description: '의 여행 일정',
  },
];

function makeMetricToNode({ id, value, unit, description }: Metric): JSX.Element {
  return (
    <MetricItem key={id}>
      <strong>
        <CountUp end={value} />
        {unit}
      </strong>
      {description}
    </MetricItem>
  );
}

const Metrics: React.FunctionComponent = () => {
  return (
    <div>
      {metrics.map(makeMetricToNode)}
    </div>
  );
};

export default Metrics;
