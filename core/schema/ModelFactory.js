const mongoose = require("mongoose");
/** 
 * ModelFactory
 * 
 * Factory object used to create new models for MongoDB
 * 
 * Creates
*/
module.exports = {
    /**
     * Creates a new model. As a result of ```mongoose.model```, adds that 
     * model to mongooses internal registry
     * 
     * @param{string} name - the name of the model. The name must be singular (i.e. Car, not Cars)
     * @param{obecjt} the schema params for the model. http://mongoosejs.com/docs/guide.html
     */
    create = (name, schemaParams) => {
        let schema = new mongoose.Schema(schemaParams)
        return mongoose.model(name, schema);
    }
}