module.exports = (sequelize, DataTypes) => sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: { type: DataTypes.TEXT, allowNull: false },
        last_name: { type: DataTypes.TEXT, allowNull: false },
        email: { type: DataTypes.TEXT, allowNull: false },
        salt: { type: DataTypes.TEXT, allowNull: false },
        password: { type: DataTypes.TEXT, allowNull: false }
    }, {
        tableName: 'userd',
        createdAt: false,
        updatedAt: false
    });
