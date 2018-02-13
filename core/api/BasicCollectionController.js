model.exports = (Model) => {
    let BasicCollectionController = {};
    BasicCollectionController.all = (request, response) => {
        Model.find({}, (err, model) => {
            if(err){
                response.send(err);
            } else {
                response.json(model);
            }
        })
    }

    BasicCollectionController.create = (request, response) => {
        let newCharacter = new Model(request.body);
        newCharacter.save((err, model) => {
            if(err){
                response.send(err);
            } else {
                response.json(model);
            }
        })
    }
    
    BasicCollectionController.getSingle = (request, response) => {
        Model.findById(request.params.characterId, (err, model) => {
          if (err)
            response.send(err);
          response.json(model);
        });
    };
    
    
    exports.update = (request, res) => {
        //whats with the new : true ? whats with the underscore id?
        Model.findOneAndUpdate({ _id: request.params.characterId}, request.body, {new: true}, (err, model) => {
            if (err) {
                res.send(err);
            } else {
                res.json(model);
            }
        });
    };
    
    exports.delete = (request, response) => {
        Model.remove( { _id : request.params.characterId }, (err, model) => {
            if(err){
                response.send(err);
            }
        });
    }
}