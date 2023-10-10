export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'list',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.TEXT
        },
        status: {
          type: Sequelize.STRING
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'user',
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
    return  await queryInterface.dropTable('list');
  }
};
