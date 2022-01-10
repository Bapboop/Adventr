"use strict";
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Comment, { foreignKey: 'userId' });
    User.hasMany(models.Image, { foreignKey: 'userId' });
    User.hasMany(models.Album, { foreignKey: 'userId'});
  };

  // Instance model methods: return an object with only the user instance of info in a JWT
  User.prototype.toSafeObject = function () {
    const { id, username, email } = this;
    return { id, username, email };
  };

  // Validates the password string === User instance hashedPassword
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  // Uses currentUser scope to return a User with that ID
  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  //Searches for User with specified credentials, then validates password:
  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");

    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };

  //  Accepts username, email, password. Hashes password. Returns created user.
  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    });

    return await User.scope("currentUser").findByPk(user.id);
  };

  return User;
};
