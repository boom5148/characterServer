const mongoose = require("mongoose");
//TODO: Not entirely sure what I want to do here
module.exports = function(modelFactory, schemaConstructor) {
    this.modelConstructor = modelFactory;
    this.SchemaConstructor = schemaConstructor;
    this.create = (name, schemaParams) => {
        return modelFactory(name, new schemaConstructor(schemaParams));
    }
}