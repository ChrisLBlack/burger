//Importing ORM
const orm = require("../config/orms.js");

const burger = {
    all: cb => {
        orm.all('burgers', res =>{
            cb(res);
        });
    },
    create: (cols, vals, cb) => {
        orm.create('burgers', cols, vals, res =>{
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.update('burgers', objColVals, condition, res => {
            cb(res);
        });
    }, 
    delete: (condition, cb) => {
        orm.delete('burgers', condition, res => {
            cb(res);
        });
    }
};
//exporting database functions for the controller
module.exports = burger;