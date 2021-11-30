import styled from 'styled-components';
import StyledDashboard from '../components/StyledDashboard';

const StyledHome = styled(StyledDashboard)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export default function Home() {
  return (
    <StyledHome>
      <h1>🚀 To the Moon 🌙</h1>
      <p>
        This open source project demonstrates GraphQL caching on the Layer0
        platform using the SpaceX GraphQL API.
      </p>
      <p>
        The caching commands used in this project can be viewed in the Github
        repo and more details are available in the GraphQL caching guide.
      </p>
    </StyledHome>
  );
}
