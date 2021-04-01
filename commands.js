const program = require('commander');
const { prompt } = require('inquirer');

const {
    addCustomer,
    findCustomer
} = require('./index');

// Customer questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer First name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer Last name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email'
    }
];

program
    .version('1.0.0')
    .description('Client managemnt system')

// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('add a new customer')
//     .action((firstname, lastname, phone , email)=>{
//         addCustomer({firstname, lastname, phone, email});
//     });

program
    .command('add')
    .alias('a')
    .description('add a new customer')
    .action(()=>{
        prompt(questions).then(answers=>addCustomer(answers));
    });

program
    .command('find <name>')
    .alias('f')
    .description('find a customer')
    .action((name)=>{
        findCustomer(name);
    });

program.parse(process.argv);