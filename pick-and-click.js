let hslDiv = document.querySelector('.hsl');
if (!hslDiv) {
	hslDiv = document.createElement('div');
	hslDiv.className = 'hsl';
	document.body.appendChild(hslDiv);
}

let hueDiv = document.querySelector('.hue.text');
if (!hueDiv) {
	hueDiv = document.createElement('div');
	hueDiv.className = 'hue text';
	document.body.appendChild(hueDiv);
}

let luminosityDiv = document.querySelector('.luminosity.text');
if (!luminosityDiv) {
	luminosityDiv = document.createElement('div');
	luminosityDiv.className = 'luminosity text';
	document.body.appendChild(luminosityDiv);
}

let svg = document.querySelector('svg#crosshair');
if (!svg) {
	svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.id = 'crosshair';
	svg.setAttribute('width', '100%');
	svg.setAttribute('height', '100%');
	svg.style.position = 'fixed';
	svg.style.top = '0';
	svg.style.left = '0';
	svg.style.pointerEvents = 'none';

	const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	axisX.id = 'axisX';
	axisX.setAttribute('x1', '0');
	axisX.setAttribute('y1', '0');
	axisX.setAttribute('x2', '0');
	axisX.setAttribute('y2', '100%');
	axisX.setAttribute('stroke', 'rgba(255, 255, 255, 0.5)');
	axisX.setAttribute('stroke-width', '1');

	const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.id = 'axisY';
	axisY.setAttribute('x1', '0');
	axisY.setAttribute('y1', '0');
	axisY.setAttribute('x2', '100%');
	axisY.setAttribute('y2', '0');
	axisY.setAttribute('stroke', 'rgba(255, 255, 255, 0.5)');
	axisY.setAttribute('stroke-width', '1');

	svg.appendChild(axisX);
	svg.appendChild(axisY);
	document.body.appendChild(svg);
}

document.addEventListener('mousemove', (event) => {
	const hue = Math.round((event.clientX / window.innerWidth) * 360);

	const luminosity = Math.round(((window.innerHeight - event.clientY) / window.innerHeight) * 100);

	const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;

	document.body.style.background = hslValue;

	hslDiv.textContent = hslValue;

	hueDiv.textContent = `Hue: ${hue}`;

	luminosityDiv.textContent = `Luminosity: ${luminosity}`;

	const axisX = document.querySelector('#axisX');
	if (axisX) {
			axisX.setAttribute('x1', event.clientX);
			axisX.setAttribute('x2', event.clientX);
	}

	const axisY = document.querySelector('#axisY');
	if (axisY) {
		axisY.setAttribute('y1', event.clientY);
		axisY.setAttribute('y2', event.clientY);
	}
});

document.addEventListener('click', () => {
	if (hslDiv && hslDiv.textContent) {
		navigator.clipboard.writeText(hslDiv.textContent);
	}
});