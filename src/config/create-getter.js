const path = function findPath(keys, conf) {
  return keys.reduce(function reducer(acc, key) {
    return typeof acc === 'undefined' ? acc : acc[key];
  }, conf);
};

module.exports = function createGetter(conf) {
  return function findKey(key) {
    return key ? path(key.split('.'), conf) : conf;
  };
};
