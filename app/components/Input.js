var React = require('react');
var PropTypes = React.PropTypes;

function Input (props) {
	return (
		<div className="col-xs-12 col-sm-6">
			<textarea name="input" onChange={props.onInput}>

			</textarea>
		</div>
	)
}

Input.propTypes = {

};

module.exports = Input;