'use strict';

/*
  This module work for set up express

  Created for Benjamin De la cruz Martinez
  @kimvex on github.com

*/

const express   = require('express');
const parser    = require('body-parser');
const cors      = require('cors');
const nunjucks  = require('nunjucks');
const helmet    = require('helmet');
const session   = require('express-session');
const path      = require('path');

const Rutas     = require('./website/models/rutas');
const Mongo     = require('./website/controllers/mongodb');

class Server {
  constructor(config = {}){

    this.app = express();

    this.app.use(parser.json());
    this.app.use(parser.urlencoded({extended: true}));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(session({
      secret: 'passSecret',
      resave: false,
      saveUninitialized: false,
    }));
    this.app.use(express.static(path.join(__dirname, './static/')));

    this.app.set('view engine', 'html');

    nunjucks.configure(path.join(__dirname, './website/views/templates'), {
      autoscape: true,
      express: this.app,
      noCache: true,
      watch: false
    });

    let ruteo = new Rutas({app: this.app});
    ruteo.get();
    ruteo.post();

    let db = new Mongo();
  }
}

module.exports = Server;
