'use strict';
module.exports =(sequelize, DataTypes)=>{
  const review = sequelize.define('review', {
      commenter_username: {
      DataTypes.STRING
    },
    commenter_email: {
      DataTypes.STRING
    },
    content: {
      DataTypes.TEXT,
      required:true
   },
 });

    review.associate=(models)=>{
      review.belongsTo(models.recipe,{
        foreignKey:'recipeId',
        onDelete:'CASCADE', //this says if we delete a recipe, its associated review is also deleted
      });
    };
  return review;
};