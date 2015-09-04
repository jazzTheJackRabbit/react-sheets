var React = require('react')
var SA_Table = require('./SA_Table.react')
var json_data = JSON.parse(document.getElementById('json-data').innerHTML)

module.exports = SheetsApp = React.createClass({
	render: function(){
		return(
			<div className="sheets-app">
				<SA_Table data={json_data}/>
			</div>
		);
	}
});