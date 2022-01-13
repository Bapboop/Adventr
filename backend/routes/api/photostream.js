const express = require("express");
const asyncHandler = require("express-async-handler");

const { Image, User } = require("../../db/models");
const router = express.Router();

// TO DO:
// Get all images that belong to the user:
router.get(
  "/:userId(\\d+)",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    console.log("backend userId", userId);

    const images = await Image.findAll({
      order: [["updatedAt", "DESC"]],
      where: { userId: userId },
    });

    return res.json(images);
  })
);

router.delete("/:id(\\d+)", asyncHandler(async (req, res) => {
  const photoId = req.params.id

  const currImage = await Image.findByPk(photoId)
  currImage.destroy();

  return res.json('deleted photo id:'+ photoId)
}))


module.exports = router;
