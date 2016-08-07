// bootstrap.js file
var System = require('es6-module-loader').System;

System.import('./factory_es6.js').then(function(index) {
	// Not Implemented
}).catch(function(err){
    console.log('err', err);
});