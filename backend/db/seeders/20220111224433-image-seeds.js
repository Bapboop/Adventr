"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images',
      [
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1641946609/Adventr/v2p3l3au8ro31_xesryc.jpg",
          description: "I loved my time in Minneapolis!",
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1641946068/Adventr/yegux5ogq1u61_c81qec.jpg",
          description:
            "This kid tried to sell me a beer from their boat! Vietnam was fun!",
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1641946354/Adventr/yaohbe4f8ng41_itdzek.jpg",
          description:
            "Moscow was so beautiful at night. I can't wait to return!",
        },
        {
          userId: 2,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1641946174/Adventr/o3ilng6v1lm61_hshpeq.jpg",
          description: "This beach in Indonesia was pink! So crazy!",
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1641946278/Adventr/zmtjpk3gci171_meaguy.jpg",
          description: "Helsinki was so cold, but definitely worth it!",
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1641945674/Adventr/mez63yma0tt61_w3l7ab.jpg",
          description: "Last summer in Portugal was the best!",
        },
        {
          userId: 2,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1641945399/Adventr/de7mz7ch2pr61_oqibsa.webp",
          description: "I had to take a trip to this secret cave in Arizona!",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});
  },
};
