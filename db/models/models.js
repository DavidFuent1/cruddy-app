const mongoose = require('mongoose');

const corgoSchema = new mongoose.Schema({
    name: String,
    age: Number,
    weight: Number
  });
  
  const Corgo = mongoose.model('Corgo', corgoSchema);

  module.exports = Corgo;