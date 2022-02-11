const { Schema, model } = require("mongoose");
const Character = require("./Character");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const characterSchema = new Schema(
  {
    name: {
      type: String,
    },
    rank: {
     password: String,
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("Charakter", userSchema);

module.exports = Character;
