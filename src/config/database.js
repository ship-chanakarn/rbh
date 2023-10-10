import dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export default {
  database: env.POSTGRES_DATABASE,
  username: env.POSTGRES_USERNAME,
  password: env.POSTGRES_PASSWORD,
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0
  },
  logging: console.log
};
