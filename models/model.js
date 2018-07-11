const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const KontactSchema = new Schema({
  firstname: {type: String},
  lastname: {type: String},
  contact: {type: String},
  email: {type: String}
})
module.exports = mongoose.model('kontact',KontactSchema)