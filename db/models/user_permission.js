const db = require('../connection');
const User = require('./user');
const Permission = require('./permission');

const user_permission = db.define('user_permission', {}, {
    freezeTableName: true,
});

User.belongsToMany(Permission, {
    through: 'user_permission',
    sourceKey: 'id',
    foreignKey: 'user_id',
});

Permission.belongsToMany(User, {
    through: 'user_permission',
    sourceKey: 'id',
    foreignKey: 'permission_id'
});

module.exports = user_permission;