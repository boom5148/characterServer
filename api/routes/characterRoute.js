//looks like it is setup this way to take a dependency
let mongoose = require('mongoose');
let dndCharacter = require('../models/DungeonsAndDragons/DnDCharacter.model');
let srCharacter = require('../models/Shadowrun/ShadowrunCharacter');
let BasicCollectionController = require("../../core/api/BasicCollectionController")
module.exports = (app) => {
    let dndCharacterController = new BasicCollectionController(dndCharacter);
    let srCharacterController = new BasicCollectionController(srCharacter);

    app.route('/dnd/characters')
        .get(dndCharacterController.all)
        .post(dndCharacterController.create);

    app.route('/dnd/characters/:id')
        .get(dndCharacterController.getSingle)
        .put(dndCharacterController.update)
        .delete(dndCharacterController.delete);

    app.route('/sr/characters')
        .get(srCharacterController.all)
        .post(srCharacterController.create);

    app.route('/sr/characters/:id')
        .get(srCharacterController.getSingle)
        .put(srCharacterController.update)
        .delete(srCharacterController.delete);
};