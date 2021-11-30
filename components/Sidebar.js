import { useQuery } from '@apollo/client';
import Image from 'next/image';
import styled from 'styled-components';
import { missionsQuery } from '../lib/query';
import OGImage from '../public/og-image.png';
import Loader from './Loader';
import Missions from './Missions';

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
  const sortAscending = false;
  const {
    loading,
    error,
    data = { launchesPast: [] },
  } = useQuery(
    missionsQuery(10, `${sortAscending ? '' : '-'}launch_date_local`),
    {
      fetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true,
    }
  );

  if (error) return <p>Error :(</p>;

  const missions = [...data.launchesPast].map((mission) => (
    <Missions {...{ mission }} key={mission.id} />
  ));

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
        <ul className="sidebar-list">{missions}</ul>
      )}
    </StyledSidebar>
  );
}
