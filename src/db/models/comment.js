import { Model } from 'sequelize';
import User from "./user";

export default (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: "userId",
            // as: "userId"
        });
        this.belongsTo(models.List, {
            foreignKey: "listId",
            // as: "listId"
        });
    }
  }

  Comment.init({
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    listId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'List',
            key: 'id'
        }
    }

  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comment'
  });

  return Comment;
};


