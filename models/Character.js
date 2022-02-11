const { Schema, model } = require("mongoose");

const characterSchema = new Schema(
    {
        name: {
            type: String
        },
         rank: {
             type: String
         } ,
        group: {
         type: String
         },
        // arsenal: {
        //     type: String,
        //     type: String,
        //     type: String
        // }
    }
);
const Character = model("Character", characterSchema);

module.exports = Character;