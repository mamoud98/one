const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    description: {
      type: "String",
      required: true,
    },
  },
  { timestaps: true }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
