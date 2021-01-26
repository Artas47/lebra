const express = require("express");
const router = new express.Router();
const wordsController = require("../controllers/wordsController");

router.get("/:wordToTranslate", wordsController.getWord);

module.exports = router;
