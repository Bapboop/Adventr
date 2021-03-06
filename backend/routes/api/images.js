// Page to view all photos (like an explore / discover page)
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')
const router = express.Router();

// Get all images:
router.get('/', asyncHandler(async(req, res, next) => {
  const images = await Image.findAll({order: [["updatedAt", "ASC"]]});
  // console.log(images[0], '!!!!!!!!!!!!!!!!backend images!!!!!!!!!')
  return res.json(images)
}))


//TO DO: Create image validator
const validateImage = [
 check('imageUrl')
    .exists({ checkFalsy: true})
    .isURL()
    .withMessage('Please provide a valid URL')
    .isLength({ min: 10 })
    .withMessage('Are you sure this is a valid image URL?'),
  handleValidationErrors,
];

// Create an image:
router.post('/', validateImage, asyncHandler(async (req, res, next) => {
  const { userId, imageUrl, description } = req.body;
  const newImage = await Image.create(req.body);
  // console.log(newImage, '#@#@#@#@ BACK END POST IMAGE ROUTE #@#@#@#@')
  // return res.redirect(`${req.imageUrl}/${id}`)
  return res.json(newImage)
}));


module.exports = router;
