module.exports = function(sequelize, DataTypes) {
  const Journal = sequelize.define(
    'Journal',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      post_title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_body: {
        type: DataTypes.TEXT,
        allowNull: false
        // validate: null
      }
    },
    {
      freezeTableName: true,
      tableName: 'Journal'
    }
  );

  Journal.associate = function(models) {
    Journal.belongsTo(models.User);
  };

  return Journal;
};
