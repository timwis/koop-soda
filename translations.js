var parser = require('node-soda2-parser');

module.exports = [
	{
		soda: 'columns',
		esri: 'outFields',
		translate: function(val) {
			return parser.stringify.columns(val);
		}
	},
	{
		soda: 'where',
		esri: 'where',
		translate: function(val) {
			return parser.stringify.where(val);
		}
	}
]