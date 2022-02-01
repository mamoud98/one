const asyncHandler = require("express-async-handler");
const Item = require("../model/item");

const getList = asyncHandler(async (req, res, next) => {
  try {
    
    const limitValue = 10;
    const skipValue = req.query.skip || 0;
    const messages = await Item.find().limit(limitValue).skip(skipValue);

    res.status(200).json(messages);
  } catch (error) {
    res.status(400);
    next(err.message);
  }
});

const createItem = asyncHandler(async (req, res, next) => {
  try {
    const messages = await Item.create(req.body);
    res.json(messages);
  } catch (error) {
    res.status(400);
    next(error.message);
  }
});

const DescriptionItem = asyncHandler(async (req, res, next) => {
  try {
    const messages = await Item.find({ _id: req.params.id });
    res.json(messages);
  } catch (error) {
    res.status(400);
    next(error.message);
  }
});

module.exports = { getList, createItem, DescriptionItem };
