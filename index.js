const mongoose = require('mongoose')
const Kontact = require('./models/model')//Import Model from Models
//Mapping promise to get rid of warning
mongoose.Promise = global.Promise
// Connection to database
const db = mongoose.connect('mongodb://0.0.0.0:27017/kontact', { useNewUrlParser: true });
//Add a contact
const addKontact = (contact) => {
    Kontact.create(contact)
      .then(contact => {
      console.info('New Customer Added')
      mongoose.connection.close();
    })
  }
//Find a contact
const findKontact = (name) => {
    const search = new RegExp(name, 'i')
    Kontact.find({$or: [{firstname: search}, {lastname: search}]})
      .then( contact => {
        console.info(contact)
        console.info(`${contact.length} matched`)
        mongoose.connection.close();
      })
  }
//Update a Contact
const updateKontact = (_id, contact) => {
  Kontact.update({ _id: _id }, contact)
  .then(contact => {
    console.info('Contact updated')
    mongoose.connection.close();  
  })
}
//Remove a Contact
const removeKontact = (_id) => {
    Kontact.deleteOne( {_id: _id} )
    .then(contact => {
      console.info('Contact removed')
      mongoose.connection.close();  
    })
  }
//List all Contacts
const findAllKontact = () => {
  Kontact.find()
    .then(contact => {
      console.info('All contacts')
      console.info(`${contact.length} found`)
      mongoose.connection.close();  
    })
}
//Export Modules
module.exports = {
  addKontact,
  findKontact,
  updateKontact,
  removeKontact,
  findAllKontact
  }