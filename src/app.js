const userController = require('./controllers/users');
const messageController = require('./controllers/messages');
const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', userController);
// send message
// create a message record for a given user...
app.post('/messages', messageController.createMessage);

// get all messages from the app
app.get('/messages', messageController.getMessages);

module.exports = app;
