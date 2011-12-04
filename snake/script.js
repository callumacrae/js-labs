var snake = document.getElementById('snake');
snake.left = 0;
snake.top = 0;

var direction = 39

document.addEventListener('keydown', function(e) {
	if (e.keyCode > 36 && e.keyCode < 41) {
		direction = e.keyCode;
		e.preventDefault();
	}
});

setInterval(function() {
	if (direction === 37) {
		// left
		if (snake.left > 19) {
			snake.left -= 20;
			snake.style.left = snake.left + 'px';
		}
	} else if (direction === 38) {
		// up
		if (snake.top > 19) {
			snake.top -= 20;
			snake.style.top = snake.top + 'px';
		}
	} else if (direction === 39) {
		// right
		if (snake.left < 380) {
			snake.left += 20;
			snake.style.left = snake.left + 'px';
		}
	} else if (direction === 40) {
		// down
		if (snake.top < 380) {
			snake.top += 20;
			snake.style.top = snake.top + 'px';
		}
	}
}, 500);
