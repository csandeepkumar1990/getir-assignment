'use strict';
const mongoose = require('mongoose');

//Products schema storing key and count array
const ProductSchema = mongoose.Schema({
    key: { type: String, set: deleteEmpty },
    counts: { type: Array },
    createdAt: { type: Date, timestamps: true }
});
module.exports = mongoose.model('Product', ProductSchema, 'Product');

function deleteEmpty(v) {
  if (v == 'null' || v == 'undefined' || v == null || v == undefined) {
    return undefined;
  }
  return v;
}


