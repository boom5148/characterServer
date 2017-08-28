let mongoose = require('mongoose'),

//we are pulling in a model, it must know the schema?
Character = mongoose.model('Character');

exports.all = (request, response) => {
    Character.find({}, (err, character) => {
        if(err){
            response.send(err);
        } else {
            response.json(character);
        }
    })
}

exports.create = (request, response) => {
    let newCharacter = new Character(request.body);
    newCharacter.save((err, character) => {
        if(err){
            response.send(err);
        } else {
            response.json(character);
        }
    })
}

exports.getSingle = function(request, response) {
    Character.findById(request.params.characterId, (err, character) => {
      if (err)
        response.send(err);
      response.json(character);
    });
  };


exports.update = function(request, res) {
    //whats with the new : true ? whats with the underscore id?
    Character.findOneAndUpdate({ _id: request.params.characterId}, request.body, {new: true}, (err, character) => {
        if (err) {
            res.send(err);
        } else {
            res.json(character);
        }
    });
};

exports.delete = function(request, response) {
    Character.remove( { _id : request.params.characterId }, (err, character) => {
        if(err){
            response.send(err);
        } else {
                response.json({message : 'Character Deleted'});
        }
    });
}