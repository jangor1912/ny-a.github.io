var scene, renderer, camera, light, player, raycaster, uniforms, delta;

function init() {
	scene = new THREE.Scene();
	
	renderer = new THREE.WebGLRenderer({ antialiasing: true });
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x20202f, 1);
	document.body.appendChild(renderer.domElement);
	
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
	
	light = new Light(new THREE.Vector3(2, 2, 0));
	scene.add(light.ambient);
	scene.add(light.diffuse);
	scene.add(light.specular);
	
	uniforms = {
		time:       { value: 1.0 },
		resolution: { value: new THREE.Vector2() }
	};
	
	uniforms.value = 1.0
	
	player = new Player(camera);
	document.addEventListener('keydown', player.onKeyDown, false);
	document.addEventListener('keyup', player.onKeyUp, false);
    scene.add(player.controls.getObject());
    
    lockMouse(player);
    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, - 1, 0), 0, 10);
	
	delta = new TimeDelta();
}

function render() {
	requestAnimationFrame(render);
	var dt = delta.computeDelta();
	uniforms.time.value += dt * 5;
	player.update(dt);
	light.update();
	renderer.render(scene, camera);
}
