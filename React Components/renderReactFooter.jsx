'use strict';

React.render(<ButtonReact classtype="accent" text="Accent" count="12" iconImage="fa fa-lightbulb-o"/>,
	document.getElementsByClassName("x-button-accent-placement")[0]);

React.render(<ButtonReact classtype="error" text="Error" count="2" iconImage="fa fa-exclamation-circle"/>,
	document.getElementsByClassName("x-button-error-placement")[0]);

React.render(<ButtonReact classtype="success" text="Success" count="5" iconImage="fa fa-smile-o"/>,
	document.getElementsByClassName("x-button-success-placement")[0]);

React.render(<ButtonReact classtype="neutral" text="Neutral" count="7" iconImage="fa fa-meh-o"/>,
	document.getElementsByClassName("x-button-neutral-placement")[0]);
