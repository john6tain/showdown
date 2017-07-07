const mongoose = require('mongoose');

let combatantSchema = mongoose.Schema({
    imageUrl: { type: mongoose.Schema.Types.String, required: true },
    name: { type: mongoose.Schema.Types.String, required: true },
    description: { type: mongoose.Schema.Types.String },
    upVotes: { type: mongoose.Schema.Types.Number, default: 0 },
    dateCreated: { type: mongoose.Schema.Types.Date, default: Date.now },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Combatant = mongoose.model('Combatant', combatantSchema);

module.exports = Combatant;