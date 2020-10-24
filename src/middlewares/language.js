module.exports.language = function language(req, res, next) {
  const defaultLanguage = req.config('defaultLanguage');
  const userSelectedLanguage = req.cookies && req.cookies.selectedLanguage;
  const selectedLanguage = userSelectedLanguage || defaultLanguage;

  if (!userSelectedLanguage) {
    res.cookie('selectedLanguage', defaultLanguage, {
      maxAge: 31536000000 // one year
    });
  }

  // eslint-disable-next-line no-multi-assign
  req.language = res.locals.language = selectedLanguage;
  next();
};
