require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DEV_DB_PW,
    database: 'mentalhealthdb',
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
    operatorsAliases: false
  },
  test: {
    username: 'postgres',
    password: process.env.DEV_DB_PW,
    database: 'mentalhealthdb_test',
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
    operatorsAliases: false
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    username: 'root',
    password: null,
    database: 'mentalhealthdb_prod',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false
  }
};
