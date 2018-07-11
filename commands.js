const program = require('commander')
const {prompt} = require('inquirer')
const {
  addKontact,
  findKontact
} = require('./index')
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Enter your first name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Enter your last name'
    },
    {
        type: 'input',
        name:'contact',
        message:'Enter your contact'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email'
    }
]
program
  .version('1.0.0')
  .description('A contact Manager')

// program
//   .command('add <firstname> <lastname> <contact> <email>')
//   .alias('a')
//   .description('Add a contact')
//   .action((firstname, lastname, contact, email) => {
//       addKontact({firstname, lastname, contact, email})
//   })
program
  .command('find <name>')
  .alias('f')
  .description('Find a contact')
  .action((name) => {
      findKontact(name)
  })

program
  .parse(process.argv)
