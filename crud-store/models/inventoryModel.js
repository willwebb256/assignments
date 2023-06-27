const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Inventory Blueprint
const InventorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: Number,
});

module.exports = mongoose.model('Inventory', InventorySchema);

