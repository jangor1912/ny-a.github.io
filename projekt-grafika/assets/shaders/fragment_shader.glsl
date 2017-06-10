uniform float time;
uniform vec2 resolution;

varying vec2 vUv;

void main(void) {
	float r = abs(sin(time / 5.0));
	float g = abs(sin(time / 4.0));
	float b = abs(sin(time / 3.0));
	gl_FragColor = vec4(r, g, b, 1.0);
}
