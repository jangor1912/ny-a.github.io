function TimeDelta() {
	var prev_time;
	var time = performance.now();
	
	this.computeDelta = function() {
		prevTime = time;
		time = performance.now();
		return (time - prevTime) / 1000;
	}
}
