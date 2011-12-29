// create the Scene object
var scene = sjs.Scene({w:640, h:480});

// load the images in parallel. When all the images are
// ready, the callback function is called.
scene.loadImages(['images/monkey.png'], function() {
    var sp = scene.Sprite('images/monkey.png');
	sp.move(100, 100).update();

	document.addEventListener('keydown', function(e) {
		if (e.keyCode === 37) {
			sp.move(-10, 0).update();
		} else if (e.keyCode === 38) {
			sp.move(0, -10).update();
		} else if (e.keyCode === 39) {
			sp.move(10, 0).update();
		} else if (e.keyCode === 40) {
			sp.move(0, 10).update();
		}
	});
});
