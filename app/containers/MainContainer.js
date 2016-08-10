var React = require('react');
var Input = require('../components/Input.js');
var Output = require('../components/Output.js');

var MainContainer = React.createClass({
	render: function () {
		return (
	    <div>
	    	<Input />
	    	<Output />
	    </div>					
		)
	}
});

module.exports = MainContainer;