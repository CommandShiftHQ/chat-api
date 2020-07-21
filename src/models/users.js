module.exports = (sequelize, DataTypes) => {
    const schema = {
      name: DataTypes.STRING,
    };
  
    const User = sequelize.define('user', schema);
    return User;
  };
  