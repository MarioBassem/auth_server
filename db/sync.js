const User = require('./models/user');
const Permission = require('./models/permission');
const user_permission = require('./models/user_permission');

const sync = async function() {
    try{
        await User.sync({force: true});
        await Permission.sync({force: true});
        await user_permission.sync({force: true});
        console.log('Tables ready...');
    } catch(err) {
        console.log('Sync error: ' + err + '\n');
    }
};

module.exports = sync;