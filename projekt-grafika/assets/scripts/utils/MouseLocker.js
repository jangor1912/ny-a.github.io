function lockMouse(player) {
	if ('pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document) {
		var element = document.body;
		
		var pointerlockchange = function (event) {
			player.controls.enabled = (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element);
		};
		
		document.addEventListener( 'pointerlockchange', pointerlockchange, false );
		document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
		document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
		
		document.addEventListener('click', function (event) {
			element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
			element.requestPointerLock();
		}, false);
	}
}
