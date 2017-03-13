'use strict';

/*

  This module work for validate session started

  Created for Benjamin De la cruz Martinez
  @kimvex on github.com

*/

module.exports = {
  login(sol, res, next){

    console.log('Here you can see the session data when you want to enter the profile', sol.session);

    if(sol.session.name) next();
    res.redirect('/');

  }
}
