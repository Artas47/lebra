const getArticles = (req, res, next) => {
  console.log("YO");
  console.log("req", req);
  res.send({ hi: "HELLO" });
};

exports.getArticles = getArticles;
