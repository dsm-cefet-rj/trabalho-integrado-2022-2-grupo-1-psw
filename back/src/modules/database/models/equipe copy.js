const mongoose = require('mongoose');
const crypto = require('crypto');

const EquipeSchema = new mongoose.Schema({
  Equipe:{
    type : String,
    required : true
  },
  email: {
    type : String,
    required : true
  },
  equipes: Array,
  hash: String,
  salt: String
});

EquipeSchema.methods.setPassword = function(password) { 
  // Creating a unique salt for a particular Equipe
  this.salt = crypto.randomBytes(16).toString('hex');

  // Hashing Equipe's salt and password with 1000 iterations, 64 length and sha512 digest
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
};

EquipeSchema.methods.validPassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
  return this.hash === hash;
};

const Equipe = mongoose.model('Equipe', EquipeSchema);

module.exports = Equipe;