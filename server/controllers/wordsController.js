const linguee = require("linguee");

const getWord = async (req, res, next) => {
  try {
    const response = await linguee.translate(req.params.wordToTranslate, {
      from: "eng",
      to: "pol",
    });
    res.send({ wordTranslated: response });
  } catch (err) {
    console.log("err", err);
    return next(new Error("Could not fetch word, try again later"));
  }
};

exports.getWord = getWord;
