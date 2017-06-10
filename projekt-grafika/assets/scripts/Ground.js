function Ground(texture_loader) {
	Ground.initTexture = function (loader, path, repeat = new THREE.Vector2(128, 128)) {
		var texture = loader.load(path);
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat = repeat;
		texture.repeat = repeat;
		return texture;
	}
	
	this.geometry = new THREE.BoxGeometry(100, 1, 100);
	this.geometry.computeVertexNormals();
	this.geometry.computeMorphNormals();
	
	this.texture = Ground.initTexture(texture_loader, "assets/img/default_stone.png");
	this.texture_n = Ground.initTexture(texture_loader, "assets/img/default_stone_hn.png");
	this.texture_a = Ground.initTexture(texture_loader, "assets/img/default_stone_a.png");
	this.texture.anisotropy = renderer.getMaxAnisotropy();
	var self = this;
	
	this.material = new THREE.MeshPhongMaterial({
		map:			this.texture,
		shading:		THREE.SmoothShading,
		normalMap:		self.texture_n,
		morphNormals:	true,
		morphTargets:	true,
		normalScale:	new THREE.Vector2(0.1, 0.2),
		aoMap:			self.texture_a,
		specular:		0x555555,
		shininess:		0.2,
	});
	
	this.mesh = new THREE.Mesh(this.geometry, this.material);
	this.mesh.position.set(0, -2, 0);
	this.mesh.receiveShadow = true;
}
