import styled from 'styled-components';

const StyledLoader = styled.div`
  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translate3d(0, -16px, 0);
    }
  }

  display: flex;
  justify-content: center;

  > div {
    width: 16px;
    height: 16px;
    margin: 3rem 0.2rem;
    background: #000;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
  }

  > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export default function Loader() {
  return (
    <StyledLoader>
      <div />
      <div />
      <div />
    </StyledLoader>
  );
}
