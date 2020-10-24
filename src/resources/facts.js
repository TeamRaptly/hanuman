const { getFacts } = require('../facts');

module.exports.factsResource = async (req, res) => {
  let facts = null;

  try {
    facts = await getFacts(req, res, {});
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error featching facts resource...', err);
  }

  return facts;
};
