var ModelFactory = require("../../../core/schema/ModelFactory");
var mongoose = require("mongoose");
console.log(mongoose)
let shadowrunCharacterModel = ModelFactory.create('srCharacter',{
    name : {
        type : String,
        require : true
    },
    attributes : [{
        name : String,
        baseValue : {
            type : Number,
            default : 1
        },
        attributeDeclaration : {
            type : mongoose.Schema.Types.ObjectId,
            required : true
        }
    }],
    skills : [{
        name : String,
        baseValue : {
            type : Number,
            default : 1
        },
        attributeDeclaration : {
            type : mongoose.Schema.Types.ObjectId,
            required : true
        }
    }],
});
module.exports = shadowrunCharacterModel;