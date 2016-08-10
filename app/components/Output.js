var React = require('react');
var PropTypes = React.PropTypes;

function Output (props) {
	console.log(props.convertedMarkdown);
	return (
		<div className="col-xs-12 col-sm-6" dangerouslySetInnerHTML={props.convertedMarkdown}>
			
		</div>
	)
}

Output.propTypes = {

};

module.exports = Output;