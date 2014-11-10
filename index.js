var Templates = require('spooky-templates-base');
var nunjucks = require('nunjucks');

var env = null;

var SpookyNunjucks = function(basePath){
    env = new nunjucks.Environment(new nunjucks.FileSystemLoader(basePath));
    Templates.call(this);
}

SpookyNunjucks.prototype = Object.create(Templates);

SpookyNunjucks.prototype.render = function(templatePath){
    return env.render(templatePath);
}

module.exports = SpookyNunjucks;