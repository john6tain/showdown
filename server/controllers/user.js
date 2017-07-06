const User = require('../models/User');
const encryption = require('../utilities/encryption');

module.exports = {
    register: {
        post: (req, res) => {
            let userData = req.body;

            if (userData.password && userData.password !== userData.confirmedPassword) {
                userData.error = 'Passwords do not match';
                return res.status(404).send({ error: 'Passwords do not match', message: 'Need data here? Look under /server/controllers/user.js.' });
            }

            let salt = encryption.generateSalt();
            userData.salt = salt;

            if (userData.password) {
                userData.password = encryption.generateHashedPassword(salt, userData.password);
            }

            User.create(userData)
                .then(user => {
                    req.logIn(user, (err, user) => {
                        if (err) {
                            return res.status(404).send({ error: 'Authentication not working!', message: 'Need data here? Look under /server/controllers/user.js.' });
                        }

                        res.status(200).send({ message: 'Need data here? Look under /server/controllers/user.js.' });
                    })
                })
                .catch(error => {
                    userData.error = error;
                    res.status(404).send({ error: error, message: 'Need data here? Look under /server/controllers/user.js.' });
                });
        },
    },
    login: {
        post: (req, res) => {
            let userData = req.body;

            User.findOne({ username: userData.username }).then(user => {
                if (!user || !user.authenticate(userData.password)) {
                    return res.status(404).send({ error: 'Wrong credentials', message: 'Need data here? Look under /server/controllers/user.js.' });
                }

                req.logIn(user, (err, user) => {
                    if (err) {
                        return res.status(404).send({ error: err, message: 'Need data here? Look under /server/controllers/user.js.' });
                    }

                    res.status(200).send({ message: 'Need data here? Look under /server/controllers/user.js.' });
                })
            })
        },
    },
    logout: (req, res) => {
        req.logout();
        res.status(200).end();
    }
};