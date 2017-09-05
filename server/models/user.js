'use strict';
module.exports =(sequelize, DataTypes)=> {
  const user = sequelize.define('user', {
    username:{
     type: DataTypes.STRING,
     required:true,
   },
   first_name:{
     type: DataTypes.STRING,
     required:true
   },
   last_name:{
     type: DataTypes.STRING,
     required:true
   },

   password: {
      type: DataTypes.STRING,
      required:true,
   },
    email: {
      type: DataTypes.STRING,
      required:true,
    },
  });

  user.associate=(models)=>{
    user.hasMany(models.recipes,{
      foreignKey:'userId',
      as: 'recipe',
    });
  };
 

  return user;
};