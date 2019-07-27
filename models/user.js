module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [3, 30]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5, 10]
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return User;
};
