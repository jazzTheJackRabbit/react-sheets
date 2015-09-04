var JSX = require('node-jsx').install()
var React = require('react')
var fs = require('fs')

module.exports = {
	index: function(req, res){	
		var json_data = fs.readFileSync('./dataset/data.json','utf8');
		res.render('home',{
			json_data: json_data
		});	
	}
}