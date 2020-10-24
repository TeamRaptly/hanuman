const { resourcesList } = require('../resources');

const objectPromises = async (obj) => {
  const keys = Object.keys(obj);
  const promises = Object.values(obj);
  const results = await Promise.all(promises);

  return keys.reduce((result, key, i) => {
    // eslint-disable-next-line no-param-reassign
    result[key] = results[i];
    return result;
  }, {});
};

const fetchResources = (req, res, resources) => {
  const fetchedPromises = {};

  resources.reduce((rcs, resourceName) => {
    const resourceToFetch = resourcesList[resourceName];

    if (typeof resourceToFetch !== 'undefined') {
      // eslint-disable-next-line no-param-reassign
      rcs[resourceName] = resourceToFetch(req, res);
    }

    return rcs;
  }, fetchedPromises);

  return fetchedPromises;
};

const loadRouteData = async (req, res, { resources }) => {
  const promises =
    Array.isArray(resources) && resources.length
      ? fetchResources(req, res, resources)
      : Promise.resolve(null);

  // eslint-disable-next-line no-return-await
  return await objectPromises(promises);
};

module.exports = { loadRouteData };
