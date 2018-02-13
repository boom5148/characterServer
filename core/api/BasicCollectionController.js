model.exports = (function(){

  let _Model = new Symbol();
  
  return class BasicCollectionController {
    /**
     * A simple controller to handle collections of a Model
     * @param {*} Model - The model this collection is managing
     */
    constructor(Model) {
      this[_Model] = Model;
    }

    /**
     * Ger all instances of a model in a collection
     * @param {*} request
     * @param {*} response
     */
    all(request, response) {
      this[_Model].find({}, (err, model) => {
        if (err) {
          response.send(err);
        } else {
          response.json(model);
        }
      });
    }

    /**
     * Create a new instance of model in the collection. The response contains the newly created model.
     * @param {*} request
     * @param {*} response
     */
    create(request, response) {
      let newCharacter = new this[_Model](request.body);
      newCharacter.save((err, model) => {
        if (err) {
          response.send(err);
        } else {
          response.json(model);
        }
      });
    }

    /**
     * Get a single
     * @param {*} request - should contain a params object containing the id, i.e ```{params : { id : 'thisId'}}
     * @param {*} response
     */
    getSingle(request, response) {
      this[_Model].findById(request.params.id, (err, model) => {
        if (err) response.send(err);
        response.json(model);
      });
    }

    /**
     * Get a single
     * @param {*} request - should contain a params object containing the id, i.e ```{params : { id : 'thisId'}}
     * @param {*} response
     */
    update(request, res) {
      //whats with the new : true ? whats with the underscore id?
      this[_Model].findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        { new: true },
        (err, model) => {
          if (err) {
            res.send(err);
          } else {
            res.json(model);
          }
        }
      );
    }

    /**
     * delete a single
     * @param {*} request - should contain a params object containing the id, i.e ```{params : { id : 'thisId'}}
     * @param {*} response
     */
    delete(request, response) {
      this[_Model].remove({ _id: request.params.id }, (err, model) => {
        if (err) {
          response.send(err);
        } else {
          //TODO: send deleted item?
          response.json({ message: "Character Deleted" });
        }
      });
    }
  };
}());
