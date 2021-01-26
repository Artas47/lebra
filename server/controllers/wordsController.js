const Reverso = require("reverso-api");

const getWord = async (req, res, next) => {
  try {
    const reverso = new Reverso();
    const response = await reverso.getContext(
      req.params.wordToTranslate,
      "English",
      "Polish"
    );
    res.send({ wordMeaning: response });
  } catch (err) {
    return next(new Error("Could not fetch word, try again later"));
  }
};

exports.getWord = getWord;
