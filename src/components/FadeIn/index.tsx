import * as React from 'react';
import styled from 'styled-components';

interface FadeInProps {
  delay?: number;
}

interface FadeInState {
  isVisible: boolean;
}

const FadeInContainer = styled.div<{ isVisible: boolean, delay: number }>`
  transition: all 700ms ease-in-out ${({ delay }) => delay}ms;

  ${({ isVisible }) => !isVisible && `
    opacity: 0;
    transform: translateY(10px);
  `}
`;

/**
 * FadeIn 컴포넌트
 * 자식 컴포넌트를 FadeIn 시켜줍니다.
 * @prop delay 애니메이션 지연 시간(ms). 기본값 0
 */
export default class FadeIn extends React.Component<FadeInProps, FadeInState> {
  state: FadeInState = {
    isVisible: false,
  };

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({ isVisible: true });
      },
      10, // HACK: timeout이 없으면 애니메이션 작동 안 함
    );
  }

  public render() {
    const { delay } = this.props;

    return (
      <FadeInContainer
        isVisible={this.state.isVisible}
        delay={delay || 0}
      >
        {this.props.children}
      </FadeInContainer>
    );
  }
}
