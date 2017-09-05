'use strict';
module.exports = {
  up: (queryInterface, Sequelize)=>{
    queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      ingredients: {
        type: Sequelize.TEXT
      },
      description: {
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
      categoryId:{
        type:Sequelize.INTEGER,
        OnDelete:'CASCADE',
        references:{
          model:'category',
          key:'id',
          as:'categoryId',
        },
      },
      userId:{
        type:Sequelize.INTEGER,
        OnDelete:'CASCADE',
        references:{
          model:'user',
          key:'id',
          as:'userId',
        },
      },

    }),
  down: (queryInterface, Sequelize)=>{
    queryInterface.dropTable('recipes');
  }
};