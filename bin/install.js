#!/usr/bin/env node

'use strict';

const path    = require('path');
const fs      = require('fs');
const mkdirp  = require('mkdirp');
const ncp     = require('ncp').ncp;

let source      = path.resolve(__dirname, '../stylesheets');
let destination = process.argv[2] || 'stylesheets';

mkdirp(destination, function(err) {
  copyStylesheets(copyWebpackConfig);
});

function copyStylesheets(callback) {
  callback = callback || function() {};
  ncp(source, destination, function (err) {
    if (err) { return console.error(err); }
    callback();
  });
}

function copyWebpackConfig() {
  fs.createReadStream(path.resolve(__dirname, '../webpack.config.js'))
    .pipe(fs.createWriteStream(destination + '/webpack.stylesheets.config.js'));
}

