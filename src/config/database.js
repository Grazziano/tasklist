module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscore: true,
    underscoreAll: true,
  },
};
