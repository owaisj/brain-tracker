module.exports = function(sequelize, DataTypes) {
  const Mood = sequelize.define(
    'Mood',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      mood_value: {
        type: DataTypes.INTEGER,
        allowNull: false
        // validate: null
      }
    },
    {
      freezeTableName: true,
      tableName: 'Mood'
    }
  );
  Mood.associate = function(models) {
    Mood.belongsTo(models.User);
  };
  return Mood;
};
