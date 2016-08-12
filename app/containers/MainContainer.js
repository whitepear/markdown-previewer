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
			rawText: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[whitepear](https://github.com/whitepear)*',
			markedText: {
				__html: marked('Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[whitepear](https://github.com/whitepear)*')
			}
		}
	},
	handleInput: function (e) {
		this.setState({
			rawText: e.target.value,
			markedText: {__html: marked(e.target.value)}
		});		
	},
	render: function () {
		return (
	    <div className="row">
	    	<h1 className="hidden-xs hidden-sm text-center app-title">Github Markdown Previewer</h1>
	    	<Input onInput={this.handleInput} rawText={this.state.rawText} />
	    	<Output convertedMarkdown={this.state.markedText} />
	    </div>				
		)
	}
});

module.exports = MainContainer;