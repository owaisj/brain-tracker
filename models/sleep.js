module.exports = function(sequelize, DataTypes) {
  const Sleep = sequelize.define(
    'Sleep',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sleep_time: {
        type: DataTypes.INTEGER,
        allowNull: false
        // validate: null
      }
    },
    {
      freezeTableName: true,
      tableName: 'Sleep'
    }
  );

  Sleep.associate = function(models) {
    Sleep.belongsTo(models.User);
  };
  return Sleep;
};
