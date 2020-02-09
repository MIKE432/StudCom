const Sequelize = require('sequelize'),
    glob = require('glob'),
    path = require('path'),
    defaults = require('./defaults/defaults');

console.log(defaults.sequalizeCredentials);
const sequelize = new Sequelize(defaults.sequalizeCredentials.databaseName,
    defaults.sequalizeCredentials.userName,
    defaults.sequalizeCredentials.password,
    defaults.sequalizeCredentials.options);

const db = {};


const models = glob.sync(path.resolve(defaults.patterns.models));

models.forEach((modelPath) => {
    const model = sequelize.import(path.resolve(modelPath));
    db[model.name] = model;
});

module.exports = db;
