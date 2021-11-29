import styled from 'styled-components';
import StyledDashboard from '../components/StyledDashboard';
import MissionDetail from '../public/mission.json';

const mission = MissionDetail[0];

const StyledMissionDetails = styled(StyledDashboard)`
  .mission-details__header {
    display: grid;
    grid-template-columns: 400px 1fr;
    max-width: 1080px;
    margin: 0 auto;
    gap: 50px;
    align-items: center;
    margin-bottom: 60px;

    .mission-copy {
      display: grid;
      justify-items: start;
      gap: 10px;

      .mission-id {
        background-color: black;
        border-radius: 40px;
        padding: 6px 12px 6px 12px;
        transition: 0.4s;
        color: white;
      }

      .mission-details {
        font-size: 16px;
        line-height: 26px;
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }

  .mission-images__list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 10px;

    .mission-images__listItem {
      > figure {
        height: 400px;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export default function MissionDetails() {
  return (
    <StyledMissionDetails>
      <header className="mission-details__header">
        <figure className="mission-figure">
          <img src={mission.links.mission_patch} alt={mission.mission_name} />
        </figure>
        <div className="mission-copy">
          <span className="mission-id">{mission.id}</span>
          <h1 className="mission-name">{mission.mission_name}</h1>
          <p className="mission-details">{mission.details}</p>
        </div>
      </header>
      <ul className="mission-images__list">
        {mission.links.flickr_images.map((imagesUrl) => (
          <li className="mission-images__listItem">
            <figure>
              <img src={imagesUrl} alt={mission.mission_name} />
            </figure>
          </li>
        ))}
      </ul>
    </StyledMissionDetails>
  );
}
