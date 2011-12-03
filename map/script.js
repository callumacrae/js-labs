var cursor = document.getElementById('cursor');
cursor.left = 0;
cursor.top = 0;

document.addEventListener('keydown', function(e) {
	if (e.keyCode === 37) {
		// left
		if (cursor.left > 49) {
			cursor.left -= 50;
			cursor.style.left = cursor.left + 'px';
		}
	} else if (e.keyCode === 38) {
		// up
		if (cursor.top > 49) {
			cursor.top -= 50;
			cursor.style.top = cursor.top + 'px';
		}
	} else if (e.keyCode === 39) {
		// right
		if (cursor.left < 750) {
			cursor.left += 50;
			cursor.style.left = cursor.left + 'px';
		}
	} else if (e.keyCode === 40) {
		// down
		if (cursor.top < 550) {
			cursor.top += 50;
			cursor.style.top = cursor.top + 'px';
		}
	}

	e.preventDefault();
});
