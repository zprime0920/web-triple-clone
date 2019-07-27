import React from 'react';
import styled from 'styled-components';
import ContentLogo from 'components/ContentLogo';
import Metrics from 'components/Metrics';
import Awards from 'components/Awards';
import FadeIn from 'components/FadeIn';

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1040px;
  height: 552px;
  padding-top: 150px;
`;

const App: React.FC = () => {
  return (
    <SectionContainer>
      <FadeIn>
        <ContentLogo />
      </FadeIn>
      <div>
        <FadeIn delay={100}>
          <Metrics />
        </FadeIn>
        <FadeIn delay={200}>
          <Awards />
        </FadeIn>
      </div>
    </SectionContainer>
  );
};

export default App;
