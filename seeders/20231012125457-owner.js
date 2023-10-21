"use strict";

const { User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "gilang",
        age: 30,
        address: "Jawa Tengah",
        type: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ale",
        age: 23,
        address: "medan",
        type: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const user = await User.findAll();

    await queryInterface.bulkInsert("Auths", [
      {
        email: "gilang123@gmail.com",
        password: "$2a$12$PUuZk8DDfcWls0iYy6bOQO7BG.Hcr6uS5LiG9MEja3fBTbWBlwaym",
        userId: user[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "ale123@gmail.com",
        password: "$2a$12$SHdp5nb0p1LJQ9iMdOOqA.2svAGXy6q3Wx5Th3B.YyU3fvroZG64m",
        userId: user[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
