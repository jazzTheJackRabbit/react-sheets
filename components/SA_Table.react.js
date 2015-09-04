var React = require('react')

module.exports = SA_Table = React.createClass({
	render: function(){
		return(
			<div className="ui container">
				<table className="ui celled very compact table unstackable striped sortable selectable">
					<SA_TableHeader data={this.props.data}/>
					<SA_TableContent data={this.props.data}/>
				</table>			
			</div>			
		);
	}
});

var SA_TableHeader = React.createClass({
	render: function(){
		var headers = Object.keys(this.props.data[0]).map(function(header){
			return(
				<th>{header}</th>
			);
		});

		return(
			<thead>				
			    <tr>
			    	{headers}
			  	</tr>
		  	</thead>
		);
	}
});

var SA_TableContent = React.createClass({
	getCellsForRow: function(row){
		cellsForRow = Object.keys(row).map(function(key){
			return(<td>{row[key]}</td>)
		});

		return(
			{cellsForRow}
		);
	},
	getTableContent: function(){
		var rows = this.props.data.map(function(row){
			return(
				<tr>
					{this.getCellsForRow(row)}
				</tr>
			)
		}.bind(this));
		return(
			{rows}
		);
	},
	render: function(){
		return(
			<tbody>
				{this.getTableContent()}
			</tbody>
		)
	}
});
