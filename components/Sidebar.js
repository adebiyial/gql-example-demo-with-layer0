import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
// import missions from '../public/missions.json';
import { formatDate } from '../utils/fx';
import OGImage from '../public/og-image.png';
import { missionsQuery } from '../lib/query';
import Loader from './Loader';

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
  min-height: 100vh;
  display: grid;
  grid-template-rows: 250px 1fr;

  .sidebar-header {
    width: 100%;
    background-color: black;
    padding: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .loader-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebar-list {
    list-style: none;
  }

  .sidebar-list__item {
    &:not(:first-child) a {
      box-shadow: inset 0 0.3px rgba(78, 85, 106, 0.17);
    }

    > a {
      display: grid;
      grid-template-columns: 25px auto;
      align-items: start;
      gap: 10px;
      padding: 16px 35px;
      transition: 0.2s;

      :hover {
        transform: translateX(10px);
        background-color: white;
      }

      &.active {
        background-color: white;
      }
    }

    .mission-name {
      font-size: 16px;
    }

    .mission-meta {
      display: flex;
      font-size: 14px;
      display: flex;
      font-size: 14px;
      margin: 7px 0;
      border-top: 1px solid rgba(78, 85, 106, 0.17);
      border-bottom: 1px solid rgba(78, 85, 106, 0.17);
      padding: 5px 0px;

      .mdash {
        margin: 0 10px;
      }
    }
  }
`;

export default function Sidebar() {
  const router = useRouter();

  const startTime = useRef(Date.now());
  const [timing, setTiming] = useState(0);
  const sortAscending = false;
  const {
    loading,
    error,
    data = { launchesPast: [] },
    refetch,
  } = useQuery(
    missionsQuery(10, `${sortAscending ? '' : '-'}launch_date_local`),
    {
      fetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true,
    }
  );

  useEffect(() => {
    if (loading) {
      startTime.current = Date.now();
    } else if (!error) {
      setTiming(Date.now() - startTime.current);
    }
  }, [loading, error]);

  if (error) return <p>Error :(</p>;

  const missions = [...data.launchesPast];

  return (
    <StyledSidebar>
      <header className="sidebar-header">
        <Image src={OGImage} alt="img" />
      </header>
      {loading ? (
        <div className="loader-wrap">
          <Loader />
        </div>
      ) : (
        <ul className="sidebar-list">
          {missions.map((mission) => (
            <li className="sidebar-list__item" key={mission.id}>
              <Link href={`/${mission.id}`} passHref>
                <a
                  className={
                    router.query['mission-id'] === mission.id ? 'active' : ''
                  }
                >
                  {mission.links.mission_patch_small ? (
                    <figure>
                      <Image
                        src={mission.links.mission_patch_small}
                        alt={mission.mission_name}
                        width="25"
                        height="25"
                      />
                    </figure>
                  ) : (
                    <div className="no-mission__icon" />
                  )}

                  <div>
                    <h2 className="mission-name">{mission.mission_name}</h2>
                    <div className="mission-meta">
                      <p className="rocket-name">
                        {mission.rocket.rocket_name}
                      </p>
                      <p className="mdash"> &mdash; </p>
                      <p className="launch-date">
                        {formatDate(mission.launch_date_utc)}
                      </p>
                    </div>
                    <p className="launch-site">
                      {mission.launch_site.site_name_long}
                    </p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </StyledSidebar>
  );
}
