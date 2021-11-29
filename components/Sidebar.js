import styled from 'styled-components';
import Link from 'next/link';
import missions from '../public/missions.json';
import { formatDate } from '../utils/fx';

const StyledSidebar = styled.div`
  word-wrap: break-word;
  hyphens: auto;
  overflow: hidden;
  overflow-y: hidden;
  overflow-y: scroll;
  width: 450px;
  background: #e3e8ee;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  text-align: left;

  .sidebar-header {
    height: 250px;
    width: 100%;
    background-color: black;
    padding: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;

    .sidebar-heading {
      color: #e95495;
    }
  }

  .sidebar-list {
    list-style: none;
    min-height: 100vh;
  }

  .sidebar-list__item {
    &:not(:first-child) a {
      box-shadow: inset 0 0.3px rgba(78, 85, 106, 0.17);
    }

    > a {
      display: grid;
      grid-template-columns: 25px auto;
      gap: 10px;
      padding: 16px 35px;
      transition: 0.2s;

      :hover {
        transform: translateX(10px);
      }
    }

    .mission-name {
      font-size: 16px;
    }

    .mission-meta {
      display: flex;
      font-size: 14px;

      .mdash {
        margin: 0 10px;
      }
    }
  }
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <header className="sidebar-header">
        <h1 className="sidebar-heading">Layer0 + GraphQL</h1>
      </header>
      <ul className="sidebar-list">
        {missions.map((mission) => (
          <li className="sidebar-list__item">
            <Link href="/" passHref>
              <a>
                <figure>
                  <img
                    src={mission.links.mission_patch_small}
                    alt={mission.mission_name}
                  />
                </figure>
                <div>
                  <h2 className="mission-name">{mission.mission_name}</h2>
                  <div className="mission-meta">
                    <p className="rocket-name">{mission.rocket.rocket_name}</p>
                    <p className="mdash"> &mdash; </p>
                    <p className="launch-date">
                      {formatDate(mission.launch_date_utc)}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledSidebar>
  );
}
