const express = require("express");
const app = express();
const articlesRoutes = require("./routes/articlesRoutes");
const port = 3001;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/articles", articlesRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
