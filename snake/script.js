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
		if (snake.left > 49) {
			snake.left -= 50;
			snake.style.left = snake.left + 'px';
		}
	} else if (direction === 38) {
		// up
		if (snake.top > 49) {
			snake.top -= 50;
			snake.style.top = snake.top + 'px';
		}
	} else if (direction === 39) {
		// right
		if (snake.left < 750) {
			snake.left += 50;
			snake.style.left = snake.left + 'px';
		}
	} else if (direction === 40) {
		// down
		if (snake.top < 550) {
			snake.top += 50;
			snake.style.top = snake.top + 'px';
		}
	}
}, 500);
