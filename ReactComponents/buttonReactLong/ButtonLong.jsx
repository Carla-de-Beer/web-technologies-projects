'use strict';

var ButtonLong;
ButtonLong = React.createClass({

	incrementCount: function () {
		this.setState({
			count: this.state.count + 1
		});
	},

	getInitialState: function () {
		return {
			count: 0
		}
	},

	render: function () {
		var type = "counter " + this.props.classtype;
		return (
			<div className={type} onClick={this.incrementCount}>
				<div className="count">
					<span className="text">{this.state.count}</span>
				</div>
				<div className="label">
					<span className={this.props.iconImage}></span>
					<span className="text">&nbsp;{this.props.text}</span>
				</div>
			</div> );
	}
});





