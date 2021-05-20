const {DataTypes} = require('sequelize');
const db = require('../connection');

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    password_hash: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    token: {
        type: DataTypes.JSON,
        allowNull: false,
    }
});

module.exports = User;