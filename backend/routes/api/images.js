// Page to view all photos (like an explore / discover page)
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models')
const router = express.Router();

// Get all images:
router.get('/', asyncHandler(async(req, res, next) => {
  const images = await Image.findAll();
  // console.log(images[0], '!!!!!!!!!!!!!!!!backend images!!!!!!!!!')
  return res.json(images)
}))


//TO DO: Create image validator
// Create an image:
router.post('/', asyncHandler(async (req, res, next) => {
  const { userId, imageUrl, description } = req.body;
  const newImage = await Image.create(req.body);
  console.log(newImage, '#@#@#@#@ BACK END POST IMAGE ROUTE #@#@#@#@')
  // return res.redirect(`${req.imageUrl}/${id}`)
  return res.json(newImage)
}));


module.exports = router;
