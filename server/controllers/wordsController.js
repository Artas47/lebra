const Reverso = require("reverso-api");
const linguee = require('linguee');

const getWord = async (req, res, next) => {
  try {
      linguee
    .translate('money', { from: 'eng', to: 'pol' })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      // ...
    });
    res.send({ wordMeaning: response });
  } catch (err) {
    console.log('err', err)
    return next(new Error("Could not fetch word, try again later"));
  }
};

exports.getWord = getWord;
