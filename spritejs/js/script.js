// create the Scene object
var scene = sjs.Scene({w:640, h:480});

// load the images in parallel. When all the images are
// ready, the callback function is called.
scene.loadImages(['images/monkey.png', 'images/platform.png'], function() {
    var monkey = scene.Sprite('images/monkey.png');
	monkey.move(100, 100).update();

	monkey.yv = 8;
	monkey.xv = 0;
	setInterval(function() {
		if ((monkey.y > 300 || monkey.collidesWithArray(platforms)) && monkey.yv >= 0) {
			monkey.yv = 0;
		} else if (monkey.yv < 8) {
			monkey.yv++;
		}

		if (monkey.xv < 0) {
			monkey.xv++;
		} else if (monkey.xv > 0) {
			monkey.xv--;
		}

		monkey.applyVelocity().update();
	}, 10);

	var platforms = sjs.List();
	for (var i = 0, sprite; i < 5; i++) {
		sprite = scene.Sprite('images/platform.png');
		platforms.add(sprite);
		sprite.position(Math.random() * 300, Math.random() * 300).update();
	}


	document.addEventListener('keydown', function(e) {
		if (e.keyCode === 37) {
			monkey.xv = -15;
		} else if (e.keyCode === 38) {
			monkey.yv = -15;
		} else if (e.keyCode === 39) {
			monkey.xv = 15;
		} else if (e.keyCode === 40) {
		} else {
			return true;
		}
		return e.preventDefault();
	});
});
