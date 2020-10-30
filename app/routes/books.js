const express = require("express");
const router = express.Router();

const booksCollection = [
  {
    author: "Emiliano",
    title: "Node JS Starting",
  },
  {
    author: "Someone",
    title: "Title for some book",
  },
];
router.get("/", (req, res, next) => {
  res.json({ books: booksCollection });
});
module.exports = router;
