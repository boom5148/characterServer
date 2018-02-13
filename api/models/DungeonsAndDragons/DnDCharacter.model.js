var ModelFactory = require("../../../core/schema/ModelFactory");
var mongoose = require("mongoose");
let dndCharacterModel = ModelFactory.create('DnDCharacter',{
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
            type : mongoose.Types.ObjectId,
            required : true
        }
    }],
    skills : [{
        name : string,
        baseValue : {
            type : Number,
            default : 1
        },
        attributeDeclaration : {
            type : mongoose.Types.ObjectId,
            required : true
        }
    }],
});
module.exports = dndCharacterModel;