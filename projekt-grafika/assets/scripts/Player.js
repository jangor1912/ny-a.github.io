function Player(camera) {
	var moveForward = false, moveBackward = false, moveRight = false, moveLeft = false;
	this.velocity = new THREE.Vector3();
	this.mass = 45.0;
	this.speed = 7.0;
	this.controls = new THREE.PointerLockControls(camera);
	this.controls.getObject().position.set(0, 0, 5);
	var canJump = true;
	self = this;
	
	this.onKeyDown = function (event) {
		switch (event.keyCode) {
			case KeyEvent.DOM_VK_UP:
			case KeyEvent.DOM_VK_W:
				moveForward = true;
				break;
			case KeyEvent.DOM_VK_DOWN:
			case KeyEvent.DOM_VK_S:
				moveBackward = true;
				break;
			case KeyEvent.DOM_VK_RIGHT:
			case KeyEvent.DOM_VK_D:
				moveRight = true;
				break;
			case KeyEvent.DOM_VK_LEFT:
			case KeyEvent.DOM_VK_A:
				moveLeft = true;
				break;
			case KeyEvent.DOM_VK_SPACE:
				if (canJump === true) self.velocity.y += 35;
				canJump = false;
		}
	}
	
	this.onKeyUp = function (event) {
		switch (event.keyCode) {
			case KeyEvent.DOM_VK_UP:
			case KeyEvent.DOM_VK_W:
				moveForward = false;
				break;
			case KeyEvent.DOM_VK_DOWN:
			case KeyEvent.DOM_VK_S:
				moveBackward = false;
				break;
			case KeyEvent.DOM_VK_RIGHT:
			case KeyEvent.DOM_VK_D:
				moveRight = false;
				break;
			case KeyEvent.DOM_VK_LEFT:
			case KeyEvent.DOM_VK_A:
				moveLeft = false;
		}
	}
	
	this.update = function(delta) {
		raycaster.ray.origin.copy(this.controls.getObject().position);
		raycaster.ray.origin.y -= 10;
		
//		var intersections = raycaster.intersectObjects(objects);
//		var isOnObject = intersections.length > 0;
		
		this.velocity.x -= this.velocity.x * 5.0 * delta;
		this.velocity.z -= this.velocity.z * 5.0 * delta;
		this.velocity.y -= 9.8 * this.mass * delta;
		
		if (moveForward)	this.velocity.z -= 10.0 * this.speed * delta;
		if (moveBackward)	this.velocity.z += 10.0 * this.speed * delta;
		if (moveLeft)		this.velocity.x -= 10.0 * this.speed * delta;
		if (moveRight)		this.velocity.x += 10.0 * this.speed * delta;

//		if (isOnObject === true) {
//			this.velocity.y = Math.max(0, this.velocity.y);
//			canJump = true;
//		}
		
		this.controls.getObject().translateX(this.velocity.x * delta);
		this.controls.getObject().translateY(this.velocity.y * delta);
		this.controls.getObject().translateZ(this.velocity.z * delta);
		
		if (this.controls.getObject().position.y < 0) {
			this.velocity.y = 0;
			this.controls.getObject().position.y = 0;
			canJump = true;
		}
	}
}
