var parser = require('node-soda2-parser'),
	translations = require('./translations');

exports.type = 'plugin';
exports.name = 'soda';

exports.parse = function(query) {
	// Parse query into AST
	console.log(query);
	var ast = parser.parse(query),
		esriQuery = {};
	
	// Map parts of AST to FeatureServer query format
	translations.forEach(function(translation) {
		if(ast[translation.soda] !== undefined && ast[translation.soda]) {
			esriQuery[translation.esri] = translation.translate(ast[translation.soda]);
		}
	})
	
	return esriQuery;
};

exports.formatOutput = function(geojson) {
	return geojson.features.map(function(row) {
		if(row.geometry) row.properties.geometry = row.geometry;
		return row.properties;
	});
};