'use strict';

/*

  This module work for make login

  Created for Benjamin De la cruz Martinez
  @kimvex on github.com

*/

const schema = require('../models/db/schema');

class Login {
  constructor(config = {}){

    let {sol, res, email, pass, next} = config;
    let hour = 3600000;

    schema.users.findOne({email: email})
      .then(data => {
        if(pass = data.pass){
          sol.session.name = email;
          sol.session.cookie.expires = new Date(Date.now() + hour);
          console.log(sol.session);
          res.status(200);
        }else{
          res.status(201);
        }
      })
      .catch(err => {
        if(err) throw err;
      });
  }
}

module.exports = Login;
