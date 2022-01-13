const express = require("express");
const asyncHandler = require("express-async-handler");

const { Image, User } = require("../../db/models");
const router = express.Router();

// TO DO:
// Get all images that belong to the user:
router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    console.log('req.body here')
    // const id = req.params.id
    console.log("backend userId", userId);
    // console.log('backend photo id lol', id)

    const images = await Image.findAll({
      order: [["updatedAt", "DESC"]],
      where: { userId: userId },
    });

    return res.json(images);
  })
);


// GET /photostream/:id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    console.log("backend  photostream id", id);

    const image = await Image.findByPk(id)
    if (image) {
      return res.json(image)
    }

    return res.json('no image found');
  })
);

router.delete("/:id", asyncHandler(async (req, res) => {
  const photoId = req.params.id

  const currImage = await Image.findByPk(photoId)
  currImage.destroy();


  return res.json(photoId)
}))

router.put("/:id", asyncHandler(async (req, res) => {
  const photoId = req.params.id
  const { description } = req.body;

  const currImage = await Image.findByPk(photoId)
  currImage.update({ description })


  res.json(currImage)

}));


module.exports = router;
