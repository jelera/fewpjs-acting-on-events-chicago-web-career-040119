// Your code here
var dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#FF69B4';

dodger.style.bottom = '0px';
dodger.style.right = dodger.style.left;


function moveDodgerLeft() {
	let leftNumbers = dodger.style.left.replace('px', '');
	let left = parseInt(leftNumbers, 10);

	if (left > 0) {
		dodger.style.left = `${left - 1}px`;
	}
}

function moveDodgerRight() {
	let leftNumbers = dodger.style.left.replace('px', '');
	let left = parseInt(leftNumbers, 10);

	if (left > 0) {
		dodger.style.left = `${left + 1}px`;
	}
}


document.addEventListener('keydown', function(e){
	if (e.which === 'ArrowLeft') {
		moveDodgerLeft();
	}
});

document.addEventListener('keydown', function(e){
	if (e.which === 'ArrowRight') {
		moveDodgerRight();
	}
});
