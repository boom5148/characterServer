//looks like it is setup this way to take a dependency
let mongoose = require('mongoose');
let dndCharacter = require('../models/DungeonsAndDragons/DnDCharacter.model');
let srCharacter = require('../models/Shadowrun/ShadowrunCharacter');
let BasicCollectionController = require("../../core/api/BasicCollectionController")
module.exports = (app) => {
    let dndCharacterController = new BasicCollectionController(dndCharacter);
    let srCharacterController = new BasicCollectionController(srCharacter);

    app.route('/dnd/characters')
        .get(dndCharacterController.all.bind(dndCharacterController))
        .post(dndCharacterController.create.bind(dndCharacterController));

    app.route('/dnd/characters/:id')
        .get(dndCharacterController.getSingle.bind(dndCharacterController))
        .put(dndCharacterController.update.bind(dndCharacterController))
        .delete(dndCharacterController.delete.bind(dndCharacterController));

    app.route('/sr/characters')
        .get(srCharacterController.all.bind(srCharacterController))
        .post(srCharacterController.create.bind(srCharacterController));

    app.route('/sr/characters/:id')
        .get(srCharacterController.getSingle.bind(srCharacterController))
        .put(srCharacterController.update.bind(srCharacterController))
        .delete(srCharacterController.delete.bind(srCharacterController));
};