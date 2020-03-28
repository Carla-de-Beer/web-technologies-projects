'use strict';

function openPage1() {
	window.location = "../footer.html";
}
'use strict';
function openPage2() {
	window.location = "index.html";
}


function showSpinner() {

	var x = document.getElementById("img1").complete;

	if (!x){
		var iDiv = document.createElement('div');
		iDiv.id = 'block';
		iDiv.className = 'fa fa-spinner fa-spin';
		document.getElementsByTagName('body')[0].appendChild(iDiv);
	}

}