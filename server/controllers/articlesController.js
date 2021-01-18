const Article = require("../models/article");

const getArticles = async (req, res, next) => {
  const e = await Article.find({});
  console.log("e", e);
  res.send({ hi: "HELLO" });
};

exports.getArticles = getArticles;
