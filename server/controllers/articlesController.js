const Article = require("../models/article");

const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({});
    res.send({ articles });
  } catch (err) {
    return next(new Error("Could not fetch articles, try again later"));
  }
};

const getArticle = async (req, res, next) => {
  try {
    const articleId = req.params.articleId;
    const article = await Article.findById(articleId);
    res.send({ article });
  } catch (err) {
    return next(new Error("Could not fetch article, try again later"));
  }
};

exports.getArticles = getArticles;
exports.getArticle = getArticle;
