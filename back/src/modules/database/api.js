const mongoose = require('mongoose');

const conn = connect();

function connect() {
  // uri pattern: 'mongodb://user:password@localhost:27017/test');` if your database has auth enabled

  try{
    mongoose.createConnection(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

    console.log('Database: Connect to successfully!');
    return mongoose.connection;

  }catch(e){
    console.log('Error: Could not connect to database!', e.message);
  }
}

module.exports = conn;