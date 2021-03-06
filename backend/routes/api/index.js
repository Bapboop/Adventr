const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const imagesRouter = require("./images.js");
const photostreamRouter = require("./photostream.js")

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/images", imagesRouter);
router.use("/photostream", photostreamRouter);

module.exports = router;
