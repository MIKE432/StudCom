const Sequelize = require('sequelize'),
    glob = require('glob'),
    path = require('path'),
    defaults = require('./defaults/defaults');


const sequelize = new Sequelize(defaults.dbCredentials.databaseName,
    defaults.dbCredentials.userName,
    defaults.dbCredentials.password,
    defaults.dbCredentials.options);

const db = {};


const models = glob.sync(path.resolve(defaults.patterns.models));

models.forEach((modelPath) => {
    const model = sequelize.import(path.resolve(modelPath));
    db[model.name] = model;
});

module.exports = db;
