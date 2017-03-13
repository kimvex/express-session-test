'use strict';

const mongoose = require('mongoose');
      mongoose.Promise = global.Promise;

class Mongo{
  constructor(config = {}){
    this.connect = mongoose.connect('mongodb://localhost/login', (err, data)=>{

      if(err) throw err;

      console.log('DB connect!');

    });

  }

}

module.exports = Mongo;
