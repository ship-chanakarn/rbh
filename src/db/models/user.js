import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
        this.hasMany(models.List, {
            foreignKey: "userId",
        });
        this.hasMany(models.Comment, {
            foreignKey: "userId",
        });
    }
  }

  User.init({
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user'
  });

  return User;
};
