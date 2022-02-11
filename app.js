// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const projectName = "lab-mooseserver-movies";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

const characters = require ("./routes/characters");
app.use("/", characters);

// const newCharacter = require ("./routes/characters");
// app.use("/", newCharacter);

// const updateCharacter = require ("./routes/characters");
// app.use("/", updateCharacter);

//     console.log(req.query)

//         .characters(req.query.characters())
//         .then(data => {
//             console.log('The received data : ', data.body.characters);
//             // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA 
//             // renders a view and sending rendered HTML string to the client
//             res.render('characters', { characters: data.body})
//         })
//         .catch(err => console.log(` An error occured in the request for 'characters'` , err))
// })

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
