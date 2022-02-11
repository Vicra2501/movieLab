// base structure of DB stated

const Character = require("../models/Character")
const mongoose = require("mongoose")
const { stack } = require("../routes")

const characters = [
    {
        name: "Motoko Kusanagi",
        rank: "Major",
        // group: "Section 9",
        // arsenal: {
        //     slot1: "P90",
        //     slot2: "Seburo M5",
        //     slot3: "Thermo optical camoflage"
    
    },
    {
        name: "Batou",
        rank: "",
        // group: "Section 9",
        // arsenal: {
        //     slot1: "M50",
        //     slot2: "AT Repi",
        //     slot3: "Arm Shotgun"
        // }
    },
    {
        name: "Molly Millions",
        rank: "Ronin",
        // group: "Freelancer",
        // arsenal: {
        //     slot1: "Razor Nails",
        //     slot2: "Glassed eyes",
        //     slot3: "tougthness"
        
    }]

//connecting with moose
mongoose
    .connect('mongodb://localhost/CharacterFile', { useNewUrlParser: true })
    .then(() => {
        console.log("connected to db in development enviroment");
    })
// step 2
Character.insertMany(characters).then((charactersFromDB) => {
    console.log(charactersFromDB)
}).catch((err) => {
    console.log('error / failed to add doc', err)
})