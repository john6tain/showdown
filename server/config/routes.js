const controllers = require('../controllers/index');
const permissions = require('./permissions');


module.exports = (app) => {
    app.post('/user/register', controllers.user.register.post);

    app.post('/user/login', controllers.user.login.post);

    app.post('/user/logout', controllers.user.logout);

    app.get('/showdown/get', controllers.combatant.showdown.get);

    app.post('/showdown/upVote', controllers.combatant.showdown.upVote);

    app.post('/combatant/add', controllers.combatant.add);
};