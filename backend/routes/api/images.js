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


module.exports = router;
