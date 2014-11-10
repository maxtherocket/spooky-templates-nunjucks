var SpookyTemplates = require('../index.js');

var spookyTemplates = new SpookyTemplates('templates');

var template = spookyTemplates.render('home');

console.log('template: ', template);
