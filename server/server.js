const express = require("express");
const app = express();
const articlesRoutes = require("./routes/articlesRoutes");
const mongoose = require("mongoose");

const port = process.env.PORT || 3001;
const mongoDbUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lee0p.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;

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

mongoose
  .connect(mongoDbUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(port, () => {
      console.log("server started");
    })
  )
  .catch((err) => {
    console.log(err);
  });
