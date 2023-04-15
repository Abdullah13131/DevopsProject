const express = require('express');
const router = express.Router();
const Shoe = require('../models/shoe');

// GET all shoes
router.get('/', async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific shoe by ID
router.get('/:id', getShoe, (req, res) => {
  res.json(res.shoe);
});

// CREATE a new shoe
router.post('/', async (req, res) => {
  const shoe = new Shoe({
    brand: req.body.brand,
    style: req.body.style,
    material: req.body.material,
    color: req.body.color,
    size: req.body.size,
    gender: req.body.gender,
    price: req.body.price,
    imageLink: req.body.imageLink
  });
  try {
    const newShoe = await shoe.save();
    res.status(201).json(newShoe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a shoe by ID
router.patch('/:id', getShoe, async (req, res) => {
  if (req.body.brand != null) {
    res.shoe.brand = req.body.brand;
  }
  if (req.body.style != null) {
    res.shoe.style = req.body.style;
  }
  if (req.body.material != null) {
    res.shoe.material = req.body.material;
  }
  if (req.body.color != null) {
    res.shoe.color = req.body.color;
  }
  if (req.body.size != null) {
    res.shoe.size = req.body.size;
  }
  if (req.body.gender != null) {
    res.shoe.gender = req.body.gender;
  }
  if (req.body.price != null) {
    res.shoe.price = req.body.price;
  }
  if (req.body.imageLink != null) {
    res.shoe.imageLink = req.body.imageLink;
  }
  try {
    const updatedShoe = await res.shoe.save();
    res.json(updatedShoe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a shoe by ID
router.delete('/:id', getShoe, async (req, res) => {
  try {
    await res.shoe.remove();
    res.json({ message: 'Deleted shoe' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a specific shoe by ID
async function getShoe(req, res, next) {
  let shoe;
  try {
    shoe = await Shoe.findById(req.params.id);
    if (shoe == null) {
      return res.status(404).json({ message: 'Cannot find shoe' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.shoe = shoe;
  next();
}

module.exports = router;