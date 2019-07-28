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
      tableName: 'User'
    }
  );

  // Associate the user with other tables
  User.associate = function(models) {
    User.hasMany(models.Journal);
    User.hasMany(models.Sleep);
    User.hasMany(models.Mood);
  };

  return User;
};
