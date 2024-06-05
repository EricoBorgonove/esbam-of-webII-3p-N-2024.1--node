'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Users', [{
      firstName: 'adm',
      lastName: 'esbam',
      email: 'adm@esbam.edu.br',
      password: '123456'
    }], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', {name:'adm'});
     
  }
};
