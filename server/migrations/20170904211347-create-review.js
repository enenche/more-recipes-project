'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>{
    queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commenter_username: {
        type: Sequelize.STRING
      },
      commenter_email: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      recipeId:{
        type:Sequelize.INTEGER,
        references:{
          model:'recipes',
          key:'id',
          as:'recipeId',
        },
      },

    })
  },
  down:(queryInterface, Sequelize) =>{
     queryInterface.dropTable('reviews');
  }
};