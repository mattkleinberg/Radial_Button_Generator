window.Radial_Button = function(num_arms, options){
	var numBtns = 360 / num_arms;
	var radius = 125;

	var parentBtn = document.getElementById('main_button');
	var offsetToParentCenter = parseInt(parentBtn.offsetWidth / 2);
	var offsetToChildCenter = 20;
	var totalOffset = offsetToParentCenter - offsetToChildCenter;

	for(var i = 1; i <= num_arms; i++){
		var childBtns = document.createElement('div');
		childBtns.className = 'subBtn';
		childBtns.style.position = 'absolute';
		var y = Math.sin((numBtns * i) * (Math.PI / 180)) * radius;
		var x = Math.cos((numBtns * i) * (Math.PI / 180)) * radius;
		childBtns.style.top = (y + totalOffset).toString() + "px";
		childBtns.style.left = (x + totalOffset).toString() + "px";
		parentBtn.appendChild(childBtns);
	}

}