'use strict';
module.exports =(sequelize, DataTypes)=>{
  const recipe = sequelize.define('recipe', {
    name: {
      DataTypes.STRING,
      allowNull:false,
    },
    ingredients:{
       DataTypes.TEXT,
       required:true
     },
    description: {
      DataTypes.TEXT
      required:true
  },

});
  recipe.associate=(models)=>{
    recipe.belongsTo(models.category,{
      foreignKey:'categoryId',
      onDelete:'CASCADE',
    });
    recipe.belongsTo(models.users,{
      foreignKey:'usersId',
      onDelete:'CASCADE'
    });
    recipe.hasMany(models.review,{
      foreignKey:'recipeId',
      as: 'reviews',
    });

  };
   
  return recipe;
};