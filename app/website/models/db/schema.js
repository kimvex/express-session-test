'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const schema   = mongoose.Schema;

const users    = require('./users');

const Esquema = {
  'users': mongoose.model('users', users)
}

module.exports = Esquema;
