// create the Scene object
var scene = sjs.Scene({w:640, h:480});

// load the images in parallel. When all the images are
// ready, the callback function is called.
scene.loadImages(['images/monkey.png'], function() {
    var sp = scene.Sprite('images/monkey.png');
	sp.move(100, 100).update();

	sp.yv = 15;
	sp.xv = 0;
	setInterval(function() {
		if (sp.y > 300 && sp.yv >= 0) {
			sp.yv = 0;
		} else if (sp.yv < 15) {
			sp.yv++;
		}

		if (sp.xv < 0) {
			sp.xv++;
		} else if (sp.xv > 0) {
			sp.xv--;
		}

		sp.applyVelocity().update();


	}, 20);


	document.addEventListener('keydown', function(e) {
		if (e.keyCode === 37) {
			sp.xv = -15;
		} else if (e.keyCode === 38) {
			sp.yv = -15;
		} else if (e.keyCode === 39) {
			sp.xv = 15;
		} else if (e.keyCode === 40) {
		} else {
			return true;
		}
		return e.preventDefault();
	});
});
