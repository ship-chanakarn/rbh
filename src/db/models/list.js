import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class List extends Model {
    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: "userId",
            // as: "userId"
        });
        this.hasMany(models.Comment, {
            foreignKey: "listId",
        });
    }
  }

  List.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    status: {
        allowNull: false,
        type: DataTypes.ENUM,      
        values: ['TO_DO', 'IN_PROGRESS', 'DONE'] 
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        }
    }

  }, {
    sequelize,
    modelName: 'List',
    tableName: 'list'
  });

  return List;
};
