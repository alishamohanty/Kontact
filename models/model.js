const mongoose = require('mongoose')
const KontactSchema = new Schema({
  firstname: String,
  lastname: String,
  contact: Number,
  email: String
})
module.exports = mongoose.Model('kontact',KontactSchema)