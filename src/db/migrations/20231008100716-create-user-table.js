export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'user',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        email: {
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING
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
    return  await queryInterface.dropTable('user');
  }
};
