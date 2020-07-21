const Sequelize = require('sequelize');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const UserModel = require("./users");
const MessageModel = require("./messages");

const setupDatabase = () => {
  const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: false,
  });

  const User = UserModel(connection, Sequelize);
  const Message = MessageModel(connection, Sequelize);
  
  /* MODELLING RELATIONS */
  // MySQL, PgSQL, MsSQL
  // 'relational' databases
  Message.belongsTo(User)

  connection.sync({ alter: true });

  return {
    User,
    Message
  };
};

module.exports = setupDatabase();