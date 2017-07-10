const Combatant = require('mongoose').model('Combatant');
const User = require('mongoose').model('User');

const TMP_USER_ID = '5961133c65bcdb1e04e8e12c'; // Replace with req.user later.

module.exports = {
    add: (req, res) => {
        let combatantData = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.image
        };
        Combatant.create(combatantData).then(combatant => {
            if (!combatant) {
                return res.status(500).send({ message: 'Cannot connect to database' });
            }

            res.status(200).end();
        });
    },
    showdown: {
        get: (req, res) => {
            User.findById(TMP_USER_ID).then(user => {
                console.log('USER\n', user.upVotedCombatants);
                Combatant
                    .findRandom()
                    .where('_id').nin(user.upVotedCombatants)
                    .limit(2)
                    .then((combatants) => {
                        console.log('COMBATANTS\n', combatants);
                        if (combatants.length !== 2) {
                            return res.status(200).send({
                                combatants: [],
                                message: 'Showtime over. No more combatants.'
                            });
                        }

                        res.status(200).send({ combatants });
                    });
            });
        },
        upVote: (req, res) => {
            let combatantId = req.body.combatantId;
            Combatant.findById(combatantId).then(combatant => {
                if (!combatant) {
                    return res.status(500).send({ message: 'Internal server error. No db connection or db corruption' });
                }

                combatant.upVotes += 1;
                combatant.save().then(() => {
                    User.findById(TMP_USER_ID).then(user => {
                        user.upVotedCombatants.push(combatantId);
                        user.save().then(() => res.status(200).end());
                    })
                });
            })
        }
    },
};