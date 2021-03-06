const {Model} = require('objection');
const Knex = require('knex');
const dbConfig = require('../knexfile');

const loadDB = () => {
    try{
        const knex = Knex(dbConfig[process.env.ENV]);
        Model.knex(knex);
    }catch(err){
        console.log(err);
    }
};

module.exports = loadDB;