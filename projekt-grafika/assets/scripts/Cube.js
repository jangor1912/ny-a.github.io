function Cube(vertex_shader, fragment_shader, uniforms) {
	this.geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
	this.geometry.computeVertexNormals();
	this.geometry.computeMorphNormals();
	
	this.material = new THREE.ShaderMaterial({
		uniforms:		uniforms,
		vertexShader:	vertex_shader,
		fragmentShader:	fragment_shader
	});
	
	this.mesh = new THREE.Mesh(this.geometry, this.material);
	this.mesh.castShadow = true;
}
