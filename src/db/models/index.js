import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../../config/database';

const basename = path.basename(__filename);
const db = {};

const connect = () =>
  new Sequelize(config.database, config.username, config.password, {
    ...config
  });

let sequelize = connect();
const fileNames = fs.readdirSync(__dirname).filter((file) => {
  return (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  );
});

for (const file of fileNames) {
  const model = require(path.join(__dirname, file)).default(
    sequelize,
    Sequelize
  );
  db[model.name] = model;
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export const getUncommittedTransaction = async () =>
  sequelize.transaction({
    isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
