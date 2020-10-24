import axios from 'axios';
import { matchRoutes } from 'react-router-config';
import { setResourceLoading } from './ui-action-creators';
import resourceSignatures from '../resource-signatures';

function getResourceSignature(type) {
  const signature = resourceSignatures[type];

  if (!signature) {
    throw new ReferenceError(`The resource of type '${type}' is invalid.`);
  }

  return signature;
}

const syncResources = (resourceNames, dispatch, getState) => {
  resourceNames.forEach((resName) => {
    const { handler } = getResourceSignature(resName);

    if (handler) {
      handler(dispatch, getState);
    }
  });
};

export const fetchResources = ({ resources, ...rest }) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(setResourceLoading(true));
    const { status, data } = await axios.post('/resources', {
      resources,
      ...rest
    });

    if (status === 200) {
      dispatch({
        type: 'RESOURCES_RECEIVED',
        payload: data
      });

      syncResources(resources, dispatch, getState);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error fetching facts>>>>', err);
  } finally {
    dispatch(setResourceLoading(false));
  }
};

export const fetchRouteResources = (routeConfig, location) => async (
  dispatch
) => {
  try {
    const branch = matchRoutes(routeConfig, location.pathname);

    branch.forEach(async ({ route, match }) => {
      if (Array.isArray(route.resources) && route.resources.length) {
        dispatch(
          fetchResources({
            resources: route.resources,
            location: location.pathname,
            match
          })
        );
      }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching route resources>>>>', error);
  }
};
