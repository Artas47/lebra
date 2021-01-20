const Article = require("../models/article");

const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({});
    res.send({ articles });
  } catch (err) {
    return next(new Error("Could not fetch articles, try again later"));
  }
};

exports.getArticles = getArticles;
