import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { formatDate } from '../lib/fx';

export default function Missions({ mission }) {
  const router = useRouter();

  return (
    <li className="sidebar-list__item" key={mission.id}>
      <Link href={`/${mission.id}`}>
        <a
          className={router.query['mission-id'] === mission.id ? 'active' : ''}
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
              <p className="rocket-name">{mission.rocket.rocket_name}</p>
              <p className="mdash"> &mdash; </p>
              <p className="launch-date">
                {formatDate(mission.launch_date_local)}
              </p>
            </div>
            <p className="launch-site">{mission.launch_site.site_name_long}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
