'use strict';
module.exports = (sequelize, DataTypes)=> {
  const category = sequelize.define('category', {
    name: {
     type: DataTypes.STRING,
     allowNull:false,
    }, 
});
  
  category.associate=(models)=>{
    category.hasMany(models.recipe,{
      onDelete:'CASCADE'
    });
  };
    
  return category;
};