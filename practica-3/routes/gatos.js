const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("estas pegando a los gatitos");
});
router.get("/byId/:id", (req, res) => {
  res.json(req.params);
});
router.post("/addcat/:id", (req, res) => {
  console.log(req.body);
  res.json({ catName: req.body.name, catId: req.params.id });
});

module.exports = router;
