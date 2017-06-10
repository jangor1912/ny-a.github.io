function Light(pos) {
	var position = new Position();
	position.setCartesian(pos);
	
	this.ambient = new THREE.AmbientLight(0xffffff, 0.2);
	this.diffuse = new THREE.DirectionalLight(0xffffff, 0.2, 0, 2);
	this.specular = new THREE.SpotLight({
		color:			0xffffff,
		intensity:		1,
		distance:		100,
		decay:			2
	});
	
	this.specular.castShadow = true;
	this.specular.shadow.darkness = 0.2;
	
	var geometry = new THREE.SphereGeometry(0.1, 3, 2);
	var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
	var mesh = new THREE.Mesh(geometry, material);
	this.specular.add(mesh);
	
	this.update = function() {
		position.setSpherical(position.getSpherical().add(new THREE.Vector3(0, 0.01, 0)))
		this.diffuse.position.copy(position.getCartesian()).normalize();
		this.specular.position.copy(position.getCartesian());
		this.specular.shadow.camera.updateProjectionMatrix();
	}
}
