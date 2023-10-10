export default {
  async up(queryInterface, Sequelize) {

    return queryInterface.createTable(
      'comment',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        description: {
          type: Sequelize.TEXT
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'user',
            }
          }
        },
        listId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'list',
            }
          }
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE,
        }

      },
      { logging: console.log }
    );
  },

  async down(queryInterface, Sequelize) {
    return  await queryInterface.dropTable('comment');
  }
};
