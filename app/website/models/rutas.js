'use strict';

/*

  This module work for to show the routes

  Created for Benjamin De la cruz Martinez
  @kimvex on github.com

*/

const verify = require('../../middlewares/verify');
const Log    = require('../controllers/login');

class Rutas{
  constructor(config = {}){

    this.app = config.app;

  }

  get(){

    this.app.get('/', (sol, res, next)=>{
      res.render('index');
    });

    this.app.get('/login', (sol, res, next)=>{
      res.render('login');
    });

    this.app.get('/perfil', verify.login, (sol, res, next)=>{
      res.render('perfil');
    });

  }

  post(){

    this.app.post('/login', (sol, res, next)=>{

      let datos = {
        sol: sol,
        res: res,
        email: sol.body.correo,
        pass: sol.body.pass,
        next: next
      }

      let login = new Log(datos);

    });

  }

}

module.exports = Rutas;
