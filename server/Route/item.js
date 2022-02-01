const express = require("express");
const { getList, createItem, DescriptionItem } = require("../controllers/item");

const router = express.Router();

router.get("/", getList);
router.post("/create", createItem);
router.get("/description/:id", DescriptionItem);

module.exports = router;
