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
          userId: 2,
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
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642165880/Adventr/GAQ-Guests-0008-1024x683_ttqckb.jpg",
          description: "I had fun seeing the whale sharks at Georiga Aquarium!",
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642165908/Adventr/IMG_6574_uabhbw.jpg",
          description: "I love the sunrise here!",
        },
        {
          userId: 2,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642165844/Adventr/bg1_twj7ey.jpg",
          description: "What a crazy view!",
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642165790/Adventr/Mount-Fuji-New_hvcxx3.jpg",
          description: "Mt Fuji was breathtaking to see!",
        },
        {
          userId: 2,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642165755/Adventr/mount-fuji-day-trip-itinerary-header_yot7pa.jpg",
          description: "Mt Fuji!!!!!",
        },
        {
          userId: 2,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642166247/Adventr/1516044769838_vjlbe7.jpg",
          description: "Tubing was so fun!!!",
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642166362/Adventr/sierra-high-route-usa-shutterstock_722530882-1024x683_sumeaa.jpg",
          description: "I love this place!",
        },
        {
          userId: 2,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642166530/Adventr/https_3A_2F_2Fspecials-images.forbesimg.com_2Fimageserve_2F5e2cb634f133f400076aabb4_2Fvietnam_2F960x0_rrprql.jpg",
          description: "Bà Nà station was so cool!",
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642168042/Adventr/1200px-JewelSingaporeVortex1_ehxwzw.jpg",
          description: "Best place to have a layover, EVER!",
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642168230/Adventr/cabin-rentals-luxury_xzzkg9.jpg",
          description: "COZY!",
        },
        {
          userId: 1,
          imageUrl:
            "https://www.cruisestoalaska.com/wp-content/uploads/denali-national-park.jpg",
          description: "Alaska was great!",
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dd9qejhag/image/upload/v1642168439/Adventr/alpine_voss_resort_vestland_fjord_norway_credits_hunnalvatn_media_2_1_2df89176-d7c8-4bb7-b7f4-88cd1ba7daf4_fpwpd7.jpg",
          description: "It was so cold but so fun!",
        },



      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});
  },
};
