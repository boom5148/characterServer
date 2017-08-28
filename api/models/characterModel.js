var mongoose = require('mongoose');

var CharacterSchema = new mongoose.Schema({
    name : {
        type : String,
        required : "Characters Must Have A Name",
        unique : true
    },
    strength : {
        type : Number,
        default : 10
    },
    dexterity : {
        type : Number,
        default : 10
    },
    constitution : {
        type : Number,
        default : 10
    },
    wisdom : {
        type : Number,
        default : 10
    },
    charisma : {
        type : Number,
        default : 10
    },
    intelligence : {
        type : Number,
        default : 10
    }
});

module.exports = mongoose.model('Character', CharacterSchema);