'use strict'

const Sequelize = require('sequelize');  
const env = require('./env');  
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {  
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//Models/tables
db.users = require('../models/users.js')(sequelize, Sequelize);  
db.reviews = require('../models/reviews.js')(sequelize, Sequelize);  
db.recipes = require('../models/recipes.js')(sequelize, Sequelize);
db.category = require('../models/category.js')(sequelize, Sequelize);

//Relations
db.reviews.belongsTo(db.recipes);  
db.recipes.hasMany(db.reviews);  
db.recipes.belongsTo(db.category);  
db.category.hasMany(db.recipes);
db.recipes.belongsTo(db.users);
db.users.hasMany(db.recipes);

module.exports = db;