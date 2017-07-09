const User = require('../models/User');
const encryption = require('../utilities/encryption');
const passport = require('passport');

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
                    //TODO: check if user exist
                        res.status(200).send({ success: true, message: 'You successfully registered user now Please login' });
                })
                .catch(error => {
                    userData.error = error;
                    res.status(404).send({ error: error, message: 'Need data here? Look under /server/controllers/user.js.' });
                });
        },
    },
    login: {
        post: (req, res, next) => {
            let userData = req.body;

            User.findOne({ username: userData.username }).then(user => {
                if (!user || !user.authenticate(userData.password)) {
                    return res.status(404).send({ error: 'Wrong credentials', message: 'Need data here? Look under /server/controllers/user.js.' });
                }
                
                 return passport.authenticate('passport', (err, token, userData) => {
                if (err) {
                    if (err.name === 'IncorrectCredentialsError') {
                        return res.status(200).json({
                            success: false,
                            message: err.message
                        })
                    }

                    return res.status(200).json({
                        success: false,
                        message: 'Could not process the form.'
                    })
                }

                return res.json({
                    success: true,
                    message: 'You have successfully logged in!',
                    token,
                    user: userData
                })
            })(req, res, next)
            })
        },
    },
    logout: (req, res) => {
        req.logout();
        res.status(200).end();
    }
};