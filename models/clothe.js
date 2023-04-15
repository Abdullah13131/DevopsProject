const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  material: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  gender: { type: String, required: true },
  price: { type: Number, required: true },
  imageLink: { type: String, required: true },
});

module.exports = mongoose.model('Clothes', clothesSchema);