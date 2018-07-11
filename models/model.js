const mongoose = require('mongoose')
const KontactSchema = new Schema({
  name: String,
  contact: Number,
  email: String
})
module.exports = mongoose.Model('kontact',KontactSchema)