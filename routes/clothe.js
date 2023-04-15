const express = require('express');
const router = express.Router();
const Clothes = require('../models/clothe');

// Get all clothes
router.get('/', async (req, res) => {
  try {
    const clothes = await Clothes.find();
    res.json(clothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific clothes item by id
router.get('/:id', getClothes, (req, res) => {
  res.json(res.clothes);
});

// Create a new clothes item
router.post('/', async (req, res) => {
  const clothes = new Clothes(req.body);
  try {
    const newClothes = await clothes.save();
    res.status(201).json(newClothes);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a clothes item
router.patch('/:id', getClothes, async (req, res) => {
  if (req.body.brand != null) {
    res.clothes.brand = req.body.brand;
  }
  if (req.body.type != null) {
    res.clothes.type = req.body.type;
  }
  if (req.body.material != null) {
    res.clothes.material = req.body.material;
  }
  if (req.body.color != null) {
    res.clothes.color = req.body.color;
  }
  if (req.body.size != null) {
    res.clothes.size = req.body.size;
  }
  if (req.body.gender != null) {
    res.clothes.gender = req.body.gender;
  }
  if (req.body.price != null) {
    res.clothes.price = req.body.price;
  }
  if (req.body.imageLink != null) {
    res.clothes.imageLink = req.body.imageLink;
  }
  try {
    const updatedClothes = await res.clothes.save();
    res.json(updatedClothes);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a clothes item
router.delete('/:id', getClothes, async (req, res) => {
  try {
    await res.clothes.remove();
    res.json({ message: 'Deleted Clothes Item' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a specific clothes item by id
async function getClothes(req, res, next) {
  let clothes;
  try {
    clothes = await Clothes.findById(req.params.id);
    if (clothes == null) {
      return res.status(404).json({ message: 'Cannot find clothes item' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.clothes = clothes;
  next();
}

module.exports = router;