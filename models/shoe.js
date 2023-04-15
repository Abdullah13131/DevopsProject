const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  material: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['men', 'women', 'both'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  }
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;