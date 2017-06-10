function Position() {
	var cartesian, spherical;
	
	this.getCartesian = function() {
		return cartesian;
	}
	
	this.setCartesian = function(pos) {
		cartesian = pos;
		spherical = Position.toSpherical(pos);
	}
	
	this.getSpherical = function() {
		return spherical;
	}
	
	this.setSpherical = function(pos) {
		spherical = pos;
		cartesian = Position.toCartesian(pos);
	}
	
	Position.toSpherical = function(cartesian) {
		var r = Math.sqrt((cartesian.x * cartesian.x) + (cartesian.y * cartesian.y) + (cartesian.z * cartesian.z));
		var phi = Math.atan2(cartesian.z, cartesian.x);
		var theta = Math.acos(cartesian.y / r);
		
		var spherical = new THREE.Vector3();
		spherical.x = r;
		spherical.y = phi;
		spherical.z = theta;
		
		return spherical;
	}
	
	Position.toCartesian = function(spherical) {
		var r = spherical.x, phi = spherical.y, theta = spherical.z;
		
		var cartesian = new THREE.Vector3();
		cartesian.x = r * Math.sin(theta) * Math.cos(phi);
		cartesian.y = r * Math.cos(theta);
		cartesian.z = r * Math.sin(theta) * Math.sin(phi);
		
		return cartesian;
	}
}
