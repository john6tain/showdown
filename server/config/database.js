const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');
const encryption = require('../utilities/encryption');

function seedAdmin() {
    User.find({username: 'admin'}).then(users => {
        if (users.length === 0) {
            let pwd = 'admin12';
            let salt = encryption.generateSalt();
            let hashedPwd = encryption.generateHashedPassword(salt, pwd);

            let adminData = {
                username: 'admin',
                firstName: 'Alex',
                lastName: 'Chobanov',
                salt: salt,
                password: hashedPwd,
                age: 33,
                gender: 'Male',
                roles: ['Admin']
            };

            User.create(adminData).then(admin => {
                console.log(`Seeded admin: ${admin.username}`);
            });
        }
    });
}

module.exports = (config) => {
    "use strict";
    mongoose.connect(config.connectionString);

    let database = mongoose.connection;
    database.once('open', (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log('Connected!');
    });

    database.on('error', (err) => {
        console.log(err);
    });

    // initDb();
    seedAdmin();
    require('../models/User');
    require('../models/Combatant');
};

