'use strict';

/*

  Module root

  Created for Benjamin De la cruz Martinez
  @kimvex on github.com

*/

const http = require('http');

const Express = require('./app/server');

const express = new Express();

let server = http.createServer(express.app);

server.listen(3000, ()=> console.log('Server running on port 3000'));
