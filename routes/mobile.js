const express = require('express');
const router = express.Router();
const MobileDevice = require('../models/mobile');

// Add a new mobile device to the database
router.post('/', async (req, res) => {
  try {
    const mobileDevice = new MobileDevice(req.body);
    await mobileDevice.save();
    res.status(201).send(mobileDevice);
  } catch (error) {
    res.status(400).send(error);
  }
});

// View all mobile devices in the database
router.get('/', async (req, res) => {
  try {
    const mobileDevices = await MobileDevice.find();
    res.send(mobileDevices);
  } catch (error) {
    res.status(500).send(error);
  }
});

// View a specific mobile device by ID
router.get('/:id', async (req, res) => {
  try {
    const mobileDevice = await MobileDevice.findById(req.params.id);
    if (!mobileDevice) {
      return res.status(404).send();
    }
    res.send(mobileDevice);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a mobile device by ID
router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['brand', 'model', 'operatingSystem', 'screenSize', 'resolution', 'camera', 'batteryLife', 'storageCapacity', 'processor', 'ram', 'price', 'color', 'imageLink'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const mobileDevice = await MobileDevice.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!mobileDevice) {
      return res.status(404).send();
    }
    res.send(mobileDevice);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a mobile device by ID
router.delete('/:id', async (req, res) => {
  try {
    const mobileDevice = await MobileDevice.findByIdAndDelete(req.params.id);
    if (!mobileDevice) {
      return res.status(404).send();
    }
    res.send(mobileDevice);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;