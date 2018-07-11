#!/usr/bin/env node
const program = require('commander')
const {prompt} = require('inquirer')
const {
  addKontact,
  findKontact,
  updateKontact,
  removeKontact,
  findAllKontact
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

program
  .command('add')
  .alias('a')
  .description('Add a contact')
  .action(() => {
    prompt(questions).then((answers => addKontact(answers)))
  })

program
  .command('find <name>')
  .alias('f')
  .description('Find a contact')
  .action((name) => {
      findKontact(name)
  })
program
  .command('update <_id>')
  .alias('u')
  .description('Update a Contact')
  .action((_id) => {
    prompt(questions).then((answers => updateKontact(_id, answers)))
  })
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a contact')
  .action((_id) => {
      removeKontact(_id)
  })
program
  .command('findall')
  .alias('fa')
  .description('Find all the contacts')
  .action(() => {
      findKontact()
  })
program
  .parse(process.argv)
