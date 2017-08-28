//looks like it is setup this way to take a dependency
module.exports = (app) => {
    var characterList = require('../controllers/characterController');

    app.route('/characters')
        .get(characterList.all)
        .post(characterList.create);

    app.route('/characters/:characterId')
        .get(characterList.getSingle)
        .put(characterList.update)
        .delete(characterList.delete);
};