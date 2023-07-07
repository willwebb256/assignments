const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Inventory Blueprint
const InventorySchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  living: {
    type: Boolean,
    required: true,
  },
  bountyAmount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Inventory', InventorySchema);