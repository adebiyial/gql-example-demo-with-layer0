import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Loader from '../components/Loader';
import StyledDashboard from '../components/StyledDashboard';
import { launchDetailsQuery } from '../lib/query';

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
  const router = useRouter();
  const missionId = router.query['mission-id'];

  const {
    loading,
    error,
    data = { launch: [] },
  } = useQuery(launchDetailsQuery(missionId), {
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <p>Error :(</p>;

  const { launch: mission } = data;
  // console.log(mission);

  return (
    <StyledMissionDetails>
      {loading ? (
        <div className="loader-wrap">
          <Loader />
        </div>
      ) : (
        <>
          <header className="mission-details__header">
            {mission.links && (
              <figure className="mission-figure">
                <img
                  src={mission.links.mission_patch}
                  alt={mission.mission_name}
                />
              </figure>
            )}
            <div className="mission-copy">
              <span className="mission-id">{mission.id}</span>
              <h1 className="mission-name">{mission.mission_name}</h1>
              {mission.details && (
                <p className="mission-details">{mission.details}</p>
              )}
            </div>
          </header>
          {mission.links && mission.links.flickr_images.length > 0 && (
            <ul className="mission-images__list">
              {mission.links.flickr_images.map((imagesUrl) => (
                <li className="mission-images__listItem" key={imagesUrl}>
                  <figure>
                    <img src={imagesUrl} alt={mission.mission_name} />
                  </figure>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </StyledMissionDetails>
  );
}
