const { Message } = require('../models/index.js');

exports.create = (req, res) => {
  Message.create(req.body)
    .then((done) => {
      res.send(done);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

exports.getMessages = (request, response) => {
  let searchQuery = {};
  if (request.query.userId) {
    searchQuery = {
      where: {
        userId: request.query.userId,
      },
    };
  }

  Message.findAll(searchQuery)
    .then((allMessages) => {
      response.send(allMessages);
    })
    .catch((err) => {
      console.log(err);
      response.sendStatus(404);
    });
};

exports.createMessage = (request, response) => {
  Message.create({
    message: request.body.message,
    userId: request.body.userId,
  })
    .then((messageCreated) => {
      console.log(messageCreated);
      response.send('created');
    })
    .catch((error) => {
      console.log(error);
      response.sendStatus(401);
    });
};
