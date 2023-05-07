'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'Airports',
      [
        {
          name: 'Chhatrapati Shivaji International Airport',
          cityID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Indira Gandhi International Airport',
          cityID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Safdarjung Airport',
          cityID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Netaji Subhas Chandra Bose International Airport',
          cityID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pune Airport',
          cityID: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Allahabad Airport',
          cityID: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Lal Bahadur Shastri International Airport',
          cityID: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jay Prakash Narayan International Airport',
          cityID: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
