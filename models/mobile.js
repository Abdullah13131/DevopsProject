const mongoose = require('mongoose');

const mobileDeviceSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  operating_system: {
    type: String,
    required: true
  },
  screen_size: {
    type: Number,
    required: true
  },
  resolution: {
    type: String,
    required: true
  },
  camera: {
    type: Number,
    required: true
  },
  battery_life: {
    type: Number,
    required: true
  },
  storage_capacity: {
    type: String,
    required: true
  },
  processor: {
    type: String,
    required: true
  },
  ram: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('MobileDevice', mobileDeviceSchema);