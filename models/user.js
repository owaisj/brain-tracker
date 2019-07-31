const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
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
    },
    {
      freezeTableName: true,
      tableName: 'User',
      hooks: {
        // eslint-disable-next-line
        beforeCreate: function(userInstance) {
          // eslint-disable-next-line no-param-reassign
          userInstance.password = bcrypt.hashSync(
            userInstance.password,
            bcrypt.genSaltSync(10),
            null
          );
        }
      }
    }
  );

  // Associate the user with other tables
  User.associate = function(models) {
    User.hasMany(models.Journal);
    User.hasMany(models.Sleep);
    User.hasMany(models.Mood);
  };

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // User.beforeCreate(function(user) {
  //   // eslint-disable-next-line no-param-reassign
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  // });

  return User;
};
