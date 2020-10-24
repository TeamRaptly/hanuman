const path = function getPath(keys, conf) {
  return keys.reduce(
    // (acc, key) => (typeof acc === 'undefined' ? acc : acc[key]),
    function checkKeys(acc, key) {
      return typeof acc === 'undefined' ? acc : acc[key];
    },
    conf
  );
};

// module.exports = conf => key => (key ? path(key.split('.'), conf) : conf);
export default function getConf(conf) {
  return function getConfKey(key) {
    return key ? path(key.split('.'), conf) : conf;
  };
}
