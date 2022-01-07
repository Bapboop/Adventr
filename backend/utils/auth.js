const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../config");
const { User } = require("../db/models");

const { secret, expiresIn } = jwtConfig;

// Sends JWT cookie after login/signup [used in login/signup routes]
const setTokenCookie = (res, user) => {
  //creating the token:
  const token = jwt.sign({ data: user.toSafeObject() }, secret, {
    expiresIn: parseInt(expiresIn),
  });

  const isProduction = process.env.NODE_ENV === "production";
  
  // Set the token cookie:
  res.cookie("token", token, {
    maxAge: expiresIn * 1000, // milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax",
  });

  return token;
};

// Restore the user session based on JWT cookie content
const restoreUser = (req, res, next) => {
  //token parsed from cookies:
  const { token } = req.cookies;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.scope("currentUser").findByPk(id);
    } catch (e) {
      res.clearCookie("token");
      return next();
    }

    if (!req.user) res.clearCookie("token");

    return next();
  });
};

// Requires a session user to be authenticated before accessing a route:
const requireAuth = [
  restoreUser,  // if JWT cookie exist, session user loaded
  function (req, res, next) {
    if(req.user) return next();

    const err = new Error('Unauthorized');
    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;
    return next(err);
  },
];

module.exports = { setTokenCookie, restoreUser, requireAuth };
