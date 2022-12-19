const mongoose = require('mongoose');

module.exports = async () => {

  const uri = !!process.env.DB_URI ? process.env.DB_URI :
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  try{
    await mongoose.connect(uri);
    console.log('Database: Connect to successfully!');

  }catch(e){
    console.log('Error: Could not connect to database!', e.message);
  }
}