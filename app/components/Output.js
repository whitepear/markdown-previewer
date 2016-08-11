var React = require('react');
var PropTypes = React.PropTypes;

function Output (props) {	
	return (
		<div className="col-xs-12 col-sm-6">
			<div dangerouslySetInnerHTML={props.convertedMarkdown}></div>
		</div>		
	)
}

Output.propTypes = {
	convertedMarkdown: PropTypes.object.isRequired
};

module.exports = Output;