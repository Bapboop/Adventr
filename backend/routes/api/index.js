const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);

// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

// //test route to test setTokenCookie function:
// /*********************USER AUTH MIDDLEWARE TESTING *********** */
// const asyncHandler = require("express-async-handler");
// const { setTokenCookie } = require("../../utils/auth.js");
// const { User } = require("../../db/models");
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "Demo-lition",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// const { restoreUser } = require("../../utils/auth.js");

// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// // requireAuth middleware test:
// // GET /api/require-auth
// const { requireAuth } = require("../../utils/auth.js");
// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// });
// *********** USER AUTH MIDDLEWARE TESTING ************* \\

module.exports = router;
