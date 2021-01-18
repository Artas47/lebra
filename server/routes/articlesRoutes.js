const express = require("express");
const router = new express.Router();
const articlesController = require("../controllers/articlesController");

router.get("/", articlesController.getArticles);

module.exports = router;
