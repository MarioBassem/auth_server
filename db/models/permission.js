const {DataTypes} = require('sequelize');
const db = require('../connection');

const Permission = db.define('permission', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    permission: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
});

module.exports = Permission;