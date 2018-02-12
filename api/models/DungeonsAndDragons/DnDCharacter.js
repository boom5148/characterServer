module.exports = (modelConstructor, SchemaConstructor) => {
    let DnDCharacterSchema = SchemaConstructor({
        
    })
    return modelConstructor('DnDCharacter', DnDCharacterSchema)
};
