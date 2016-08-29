'use strict';

var Component1 = React.createClass({
	render: function() {
		return (
			<h2>{this.props.name} likes to eat {this.props.food}</h2>
		);
	}
});

var Component2 = React.createClass({
	render: function() {
		return (

			<div>
				<h1>{this.props.name}</h1>
				<p>{this.props.children}</p>
			</div>
		);
	}
});

var Component3 = React.createClass({

	doSomething: function(){
		alert(this.props.children);
	},

	render: function() {
		return (

			<div>
				<h1>{this.props.name}</h1>
				<a onClick={this.doSomething} href="#">Click</a>
			</div>
		);
	}
});
