'use strict';
module.exports = {
  up: (queryInterface, Sequelize)=>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       first_name:{
       type: Sequelize.STRING,
       required:true
      },
      last_name:{
      type: Sequelize.STRING,
      required:true
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  
  down: (queryInterface, Sequelize) =>{
     queryInterface.dropTable('users');
  }
};
