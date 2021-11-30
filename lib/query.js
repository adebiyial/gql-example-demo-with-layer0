import { gql } from '@apollo/client';

export function missionsQuery(limit = 20, sort = '-launch_date_local') {
  return gql`
  query GetMissions {
    launchesPast(limit: ${limit}, sort: "${sort}") {
			id
      mission_name
      launch_date_local
			links {
				mission_patch_small
			}
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
    }
  }
`;
}

export function launchDetailsQuery(id) {
  return gql`
    query GetLaunchDetails {
      launch(id: ${id}) {
        id
        mission_name
        details
        links {
          flickr_images
          mission_patch
        }
      }
    }
  `;
}
