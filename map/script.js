var cursor = document.getElementById('cursor');
cursor.left = 0;
cursor.top = 0;

document.addEventListener('keydown', function(e) {
	if (e.keyCode === 37) {
		// left
		if (((cursor.top <= 50 || cursor.top >= 300) || cursor.left !== 250) && cursor.left > 49) {
			cursor.left -= 50;
			cursor.style.left = cursor.left + 'px';
		}
	} else if (e.keyCode === 38) {
		// up
		if ((cursor.top !== 300 || cursor.left !== 200) && cursor.top > 49) {
			cursor.top -= 50;
			cursor.style.top = cursor.top + 'px';
		}
	} else if (e.keyCode === 39) {
		// right
		if (((cursor.top <= 50 || cursor.top >= 300) || cursor.left !== 150) && cursor.left < 750) {
			cursor.left += 50;
			cursor.style.left = cursor.left + 'px';
		}
	} else if (e.keyCode === 40) {
		// down
		if ((cursor.top !== 50 || cursor.left !== 200) && cursor.top < 550) {
			cursor.top += 50;
			cursor.style.top = cursor.top + 'px';
		}
	}

	e.preventDefault();
});
