var React = require('react');
var PropTypes = React.PropTypes;

function Input (props) {
	return (
		<div className="col-xs-12 col-sm-6">
			<textarea className="form-control" rows="22" name="markDownInput" value={props.rawText} onChange={props.onInput}>
			
			</textarea>
		</div>
	)
}

Input.propTypes = {
	rawText: PropTypes.string.isRequired,
	onInput: PropTypes.func.isRequired
};

module.exports = Input;