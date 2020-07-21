module.exports = (sequelize, DataTypes) => {
  const schema = {
    message: DataTypes.STRING,
  };

  const Message = sequelize.define('message', schema);
  return Message;
};
