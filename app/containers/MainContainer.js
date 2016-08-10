var React = require('react');
var Input = require('../components/Input.js');
var Output = require('../components/Output.js');
var marked = require('marked');

marked.setOptions({
	sanitize: true
});

var MainContainer = React.createClass({
	getInitialState: function () {
		return {
			text: {
				__html: ''
			}
		}
	},
	handleInput: function (e) {
		this.setState({
			text: {__html: marked(e.target.value)}
		});		
	},
	render: function () {
		return (
	    <div className="row">
	    	<Input onInput={this.handleInput} />
	    	<Output convertedMarkdown={this.state.text} />
	    </div>				
		)
	}
});

module.exports = MainContainer;