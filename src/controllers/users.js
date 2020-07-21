// create a user record in the database
// REST guidelines
// "POST" path should match whatever database table/model 
const { User } = require("../models/index.js"); // { User: }

module.exports = (request, response) => {
  User.create({
    name: request.body.name,
  })
    .then((rowsCreated) => {
      console.log({ rowsCreated });
      response.send('Created User Record');
    })
    .catch((error) => {
      console.log({ error });
      response.sendStatus(400);
    });
};
