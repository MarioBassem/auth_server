const {DataTypes} = require('sequelize');
const db = require('../connection');

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(75),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            len: {
                args: [1, 75],
                msg: 'Email length must be within 1 and 75'
            }
        }
    },
    password_hash: {
        type: DataTypes.STRING(70),
        allowNull: false,

    },
    // token: {
    //     type: DataTypes.JSON,
    //     allowNull: false,
    // }
});

module.exports = User;