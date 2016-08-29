var Polaroid1 = React.createClass({

	showSpinner: function() {

		var x = document.getElementById("img1").complete;

		if (!x){
			var iDiv = document.createElement('div');
			iDiv.id = 'block';
			iDiv.className = 'fa fa-spinner fa-spin';
			document.getElementsByTagName('body')[0].appendChild(iDiv);
		}
	},

	doSomething: function(){

		var firstURL = "http://voices.nationalgeographic.com/files/2013/04/NationalGeographic_1467467.jpg";
		var secondURL = "http://travel.nationalgeographic.com/u/TvyamNb-BivtNwcoxtkc5xGBuGkIMh_nj4UJHQKuoXVNanjYET5fJx-jkCQ13Ip2W3N4yXS_hylClQ/" ;
		var thirdURL = "http://images.nationalgeographic.com/wpf/media-live/photos/000/658/cache/deer-creek-canyon-grand-canyon_65899_990x742.jpg";

		var imageURL = document.getElementById("img1").src;

		/* var xx = document.getElementById("img1").complete;

		if (!xx){
			var iDiv = document.createElement('div');
			iDiv.id = 'block';
			iDiv.className = 'fa fa-spinner fa-spin';
			document.getElementsByTagName('body')[0].appendChild(iDiv);
		} */

		if (imageURL === firstURL) {
			document.getElementById("img1").src = secondURL;
			var x = document.getElementById("img1").complete;
			if (x){
				document.getElementById("subHeader1").innerHTML = "Canyon View";
			}

		} else if (imageURL === secondURL){
			document.getElementById("img1").src = thirdURL;
			var y = document.getElementById("img1").complete;
			if (y) {
				document.getElementById("subHeader1").innerHTML = "Deer Creek Narrows";
			}
		}
		else if(imageURL === thirdURL) {
			document.getElementById("img1").src = firstURL;
			var z = document.getElementById("img1").complete;
			if (z) {
				document.getElementById("subHeader1").innerHTML = "Grand Canyon";
			}
		}
	},

	render: function() {
		return (
			<div id="container">
				<div id="first">
					<h2 className="header">{this.props.headerText}</h2>
				</div>
				<div id="second">
					<h3 className="subHeader" id="subHeader1">{this.props.subHeaderText}</h3>
				</div>

				<div id="img3"></div>

				<img onLoad={this.showSpinner} id="img1" src={this.props.imageUrl} width="400px"
					 className="imageType" alt="missing image" onClick={this.doSomething}/>

			</div>
		);
	}
});


// --------------------------------------------------------------------------------------------------------------

var Polaroid2 = React.createClass({

	doSomething: function(){

		var firstURL = "http://yosemitelodging.com/wp-content/uploads/2015/12/Galen-Rowell-and-Yosemite1.jpg"
		var secondURL = "http://travel.nationalgeographic.com/u/TvyamNb-BivtNwpvn7Sct0VFDulyAfA9wBcU0gVHVnqC5ghsgrXDA9wT3zkYEWzhEXuT-mTEtIc4rt2nCw/";
		var thirdURL = "http://kenrockwell.com/trips/2011-10-yosemite/D3R_6233-half-dome.jpg";

		var imageURL = document.getElementById("img2").src;

		if (imageURL === firstURL) {
			document.getElementById("img2").src = secondURL;
			var x = document.getElementById("img2").complete;
			if (x){
				document.getElementById("subHeader2").innerHTML = "Winter View";
			}

		} else if (imageURL === secondURL){
			document.getElementById("img2").src = thirdURL;
			var y = document.getElementById("img2").complete;
			if (y) {
				document.getElementById("subHeader2").innerHTML = "El Capitan";
			}
		}
		else if(imageURL === thirdURL) {
			document.getElementById("img2").src = firstURL;
			var z = document.getElementById("img2").complete;
			if (z) {
				document.getElementById("subHeader2").innerHTML = "Yosemite";
			}
		}
	},

	render: function() {
		return (
			<div id="container2">
				<div id="first2">
					<h2 className="header2">{this.props.headerText}</h2>
				</div>
				<div id="second2">
					<h3 className="subHeader2" id="subHeader2">{this.props.subHeaderText}</h3>
				</div>

				<img id="img2" src={this.props.imageUrl} width="400px" className="imageType2" alt="missing image" onClick={this.doSomething}/>

			</div>
		);
	}
});