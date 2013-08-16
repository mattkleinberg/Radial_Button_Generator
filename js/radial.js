window.Radial_Button = function(num_arms, options){
	var btnRotate = 360 / num_arms;
	//var radius = 125;

	var defaultOptions = {
		main_button_text: 'Default Text',
		radius: 125,
		rotate_offset: 0,
		color: {
			main_button: '#ff0000',
			sub_buttons: '#0000ff'
		},
		animation: {
			style: {},
			duration: 5
		},
		button_shape: {
			circle: 'circle',
			square: 'square',
			custom: 'custom'
		},
		main_button_size: '150px',
		sub_button_size: '40px'
	};

	var parentBtn = document.getElementById('main_button');
	parentBtn.innerHTML = defaultOptions.main_button_text;
	var offsetToParentCenter = parseInt(parentBtn.offsetWidth / 2);
	var offsetToChildCenter = 20;
	var totalOffset = offsetToParentCenter - offsetToChildCenter;

	for(var i = 1; i <= num_arms; i++){
		var childBtns = document.createElement('div');
		childBtns.className = 'subBtn';
		childBtns.style.position = 'absolute';
		var y = Math.sin(((btnRotate * i) - 90 + defaultOptions.rotate_offset) * (Math.PI / 180)) * defaultOptions.radius;
		var x = Math.cos(((btnRotate * i) - 90 + defaultOptions.rotate_offset) * (Math.PI / 180)) * defaultOptions.radius;
		childBtns.style.top = (y + totalOffset).toString() + "px";
		childBtns.style.left = (x + totalOffset).toString() + "px";
		childBtns.style.display = "none";
		parentBtn.appendChild(childBtns);
	}

	parentBtn.onclick = function(){
		//toggle show and hide of sup buttons
		subBtns = document.getElementsByClassName('subBtn');
		for(var i = 0; i < subBtns.length; i++){
			if(subBtns[i].style.display == 'none'){
				subBtns[i].style.display = 'block';
			}else{
				subBtns[i].style.display = 'none';
			}
		}
	};

}