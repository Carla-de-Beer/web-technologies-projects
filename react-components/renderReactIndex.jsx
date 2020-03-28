'use strict';

React.render(
	<div >
		<Polaroid1 headerText="National Geographic Image" subHeaderText="Grand Canyon"
				   imageUrl="http://voices.nationalgeographic.com/files/2013/04/NationalGeographic_1467467.jpg">
		</Polaroid1>
	</div>
	, document.getElementById("image1")
);


React.render(
	<div >
		<Polaroid2 headerText="National Geographic Image" subHeaderText="Yosemite"
				   imageUrl="http://yosemitelodging.com/wp-content/uploads/2015/12/Galen-Rowell-and-Yosemite1.jpg">

		</Polaroid2>
	</div>
	, document.getElementById("image2")
);


React.render(<ButtonLong classtype="success" text="Success" count="5" iconImage="fa fa-smile-o"/>,
	document.getElementsByClassName("x-button-success-placement")[0]);







