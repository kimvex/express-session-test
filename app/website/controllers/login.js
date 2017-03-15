'use strict';

/*

  This module work for make login

  Created for Benjamin De la cruz Martinez
  @kimvex on github.com

*/

// Database simulation
let db =[
  {
    email: 'kimvex@kimvex.com',
    pass: '1234'
  }
]

// function Promise for verify if exist email on the data base
function base(email){

  let promesa = new Promise((resolve, reject) => {

      let dato = db.find(data => {

        return data.email === email;

      });

      if(dato) resolve(dato);
      reject(Error('Mail no exist'));

  });

  return promesa;

}

class Login {
  constructor(config = {}){

    let {sol, res, email, pass, next} = config;
    let hour = 3600000;

    // Send data
    base(email)
      .then(data => {

        if(data.pass == pass){

          // if password is equal at "pass" send for user set cookies
          sol.session.name = email;
          sol.session.cookie.expires = new Date(Date.now() + hour);
          console.log(sol.session);

          // return at client status 200
          res.status(200);

        } else {

          // return at client status 201
          res.status(201);

        }

      })
      .catch(err => {

        if(err) console.log(err);

      });

  }
}

module.exports = Login;
