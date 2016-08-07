// bootstrap.js file
var System = require('es6-module-loader').System;

System.import('./main.js').then(function(index) {
	// Not Implemented
}).catch(function(err){
    console.log('err', err);
});