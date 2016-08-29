'use strict';

React.render(
	<div>
		<Component1 name="Joe" food="grapes" />
		<Component1 name="Sue" food="peaches"/>
		<Component1 name="Ed" food="apricots"/>
	</div>
	, document.getElementsByClassName("content1")[0]
);

React.render(
	<div>
		<Component2 name="Emily">She smells like mints</Component2>
		<Component2 name="Joe">He loves eating liquorice</Component2>
	</div>
	, document.getElementsByClassName("content2")[0]
);

React.render(
	<div>
		<Component3 name="Emily">She smells like mints</Component3>
		<Component3 name="Joe">He loves eating liquorice</Component3>
	</div>
	, document.getElementsByClassName("content3")[0]
);




