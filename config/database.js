export default {
  development: {
    driver: 'sqlite3',
    database: 'lux_test_error_importing_model_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'lux_test_error_importing_model_test'
  },

  production: {
    driver: 'sqlite3',
    database: 'lux_test_error_importing_model_prod'
  }
};
