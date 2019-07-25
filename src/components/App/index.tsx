import React from 'react';
import styled from 'styled-components';
import ContentLogo from 'components/ContentLogo';
import Metrics from 'components/Metrics';
import Awards from 'components/Awards';

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
      <ContentLogo />
      <div>
        <Metrics />
        <Awards />
      </div>
    </SectionContainer>
  );
};

export default App;
