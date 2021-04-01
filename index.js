const mongoose = require('mongoose');

//Import Model
const Customer = require('./models/customer');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
//Cponnect to db
const db = mongoose.connect('mongodb://localhost:27017/customercli',{ useNewUrlParser: true, useUnifiedTopology: true  });

//Add Customer
const addCustomer = (customer)=>{
    Customer.create(customer)
        .then(customer=>{
            console.log('New customer added');
            return customer;
        })
        .catch(err=>{
            console.log(err.message);
        })
};

//Find Customer
const findCustomer = name =>{
    const search = new RegExp(name,'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
        .then(customer =>{
            console.info(customer);
            console.info(`${customer.length} matches`);
        });
}

module.exports = {
    addCustomer,
    findCustomer
}