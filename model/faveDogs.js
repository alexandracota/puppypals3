'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FaveDogsSchema = new Schema ({
	zipcode: String,
	breed: String
});

module.exports = mongoose.model('FaveDog', FaveDogsSchema)