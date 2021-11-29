import styled from 'styled-components';
import StyledDashboard from '../components/StyledDashboard';

const StyledHome = styled(StyledDashboard)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <StyledHome>
      <h1>
        Put some details here...probably something relating to Layer0 and
        GraphQL
      </h1>
    </StyledHome>
  );
}
