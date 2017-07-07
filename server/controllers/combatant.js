const Combatant = require('mongoose').model('Combatant');
const User = require('mongoose').model('User');

const TMP_USER_ID = '595e4be48f982109f0f95c1c';

module.exports = {
    add: (req, res) => {
        let combatantData = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        Combatant.create(combatantData).then(combatant => {
            if (!combatant) {
                return res.status(500).send({ message: 'Cannot connect to database' });
            }

            res.status(200).end();
        });
    },
    showdown:  (req, res) => {
        User.findById(TMP_USER_ID).then(user => {
            Combatant
                .find({ random: { $near: [Math.random(), 0] } })
                .where('upVotes').nin(user.upVotedCombatants)
                .limit(2)
                .then(combatants => {
                    if (combatants.length !== 2 ) {
                        return res.status(200).send({ combatants: [], message: 'Showtime over. No more combatants.' });
                    }

                    res.status(200).send({ combatants });
                });
        });
    },
};