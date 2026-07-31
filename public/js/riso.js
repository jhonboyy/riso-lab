const RISOCOLORS = [
	{ name: 'BLACK', color: [0, 0, 0], alias: 'Black' },
	{ name: 'BURGUNDY', color: [145, 78, 114], alias: 'Burgundy' },
	{ name: 'BLUE', color: [0, 120, 191], alias: 'Blue' },
	{ name: 'GREEN', color: [0, 169, 92], alias: 'Green' },
	{ name: 'MEDIUMBLUE', color: [50, 85, 164], alias: 'Medium blue' },
	{ name: 'BRIGHTRED', color: [241, 80, 96], alias: 'Bright red' },
	{ name: 'RISOFEDERALBLUE', color: [61, 85, 136], alias: 'Federal blue' },
	{ name: 'PURPLE', color: [118, 91, 167], alias: 'Purple' },
	{ name: 'TEAL', color: [0, 131, 138], alias: 'Teal' },
	{ name: 'FLATGOLD', color: [187, 139, 65], alias: 'Flatgold' },
	{ name: 'HUNTERGREEN', color: [64, 112, 96], alias: 'Huntergreen' },
	{ name: 'RED', color: [255, 102, 94], alias: 'Red' },
	{ name: 'BROWN', color: [146, 95, 82], alias: 'Brown' },
	{ name: 'YELLOW', color: [255, 232, 0], alias: 'Yellow' },
	{ name: 'MARINERED', color: [210, 81, 94], alias: 'Marinered' },
	{ name: 'ORANGE', color: [255, 108, 47], alias: 'Orange' },
	{ name: 'FLUORESCENTPINK', color: [255, 72, 176], alias: 'Fluor pink' },
	{ name: 'LIGHTGRAY', color: [136, 137, 138], alias: 'Light gray' },
	{ name: 'METALLICGOLD', color: [172, 147, 110], alias: 'Metallic gold' },
	{ name: 'CRIMSON', color: [228, 93, 80], alias: 'Crimson' },
	{ name: 'FLUORESCENTORANGE', color: [255, 116, 119], alias: 'Fluor orange' },
	{ name: 'CORNFLOWER', color: [98, 168, 229], alias: 'Corn flower' },
	{ name: 'SKYBLUE', color: [73, 130, 207], alias: 'Sky blue' },
	{ name: 'SEABLUE', color: [0, 116, 162], alias: 'Sea blue' },
	{ name: 'LAKE', color: [35, 91, 168], alias: 'Lake' },
	{ name: 'INDIGO', color: [72, 77, 122], alias: 'Indigo' },
	{ name: 'MIDNIGHT', color: [67, 80, 96], alias: 'Midnight' },
	{ name: 'MIST', color: [213, 228, 192], alias: 'Mist' },
	{ name: 'GRANITE', color: [165, 170, 168], alias: 'Granite' },
	{ name: 'CHARCOAL', color: [112, 116, 124], alias: 'Charcoal' },
	{ name: 'SMOKYTEAL', color: [95, 130, 137], alias: 'Smokyteal' },
	{ name: 'STEEL', color: [55, 94, 119], alias: 'Steel' },
	{ name: 'SLATE', color: [94, 105, 94], alias: 'Slate' },
	{ name: 'TURQUOISE', color: [0, 170, 147], alias: 'Turquoise' },
	{ name: 'EMERALD', color: [25, 151, 93], alias: 'Emerald' },
	{ name: 'GRASS', color: [57, 126, 88], alias: 'Grass' },
	{ name: 'FOREST', color: [81, 110, 90], alias: 'Forest' },
	{ name: 'SPRUCE', color: [74, 99, 93], alias: 'Spruce' },
	{ name: 'MOSS', color: [104, 114, 77], alias: 'Moss' },
	{ name: 'SEAFOAM', color: [98, 194, 177], alias: 'Sea foam' },
	{ name: 'KELLYGREEN', color: [103, 179, 70], alias: 'Kelly green' },
	{ name: 'LIGHTTEAL', color: [0, 157, 165], alias: 'Light teal' },
	{ name: 'IVY', color: [22, 155, 98], alias: 'Ivy' },
	{ name: 'PINE', color: [35, 126, 116], alias: 'Pine' },
	{ name: 'LAGOON', color: [47, 97, 101], alias: 'Lagoon' },
	{ name: 'VIOLET', color: [157, 122, 210], alias: 'Violet' },
	{ name: 'ORCHID', color: [170, 96, 191], alias: 'Orchid' },
	{ name: 'PLUM', color: [132, 89, 145], alias: 'Plum' },
	{ name: 'RAISIN', color: [119, 93, 122], alias: 'Raisin' },
	{ name: 'GRAPE', color: [108, 93, 128], alias: 'Grape' },
	{ name: 'SCARLET', color: [246, 80, 88], alias: 'Scarlet' },
	{ name: 'TOMATO', color: [210, 81, 94], alias: 'Tomato' },
	{ name: 'CRANBERRY', color: [209, 81, 122], alias: 'Cranberry' },
	{ name: 'MAROON', color: [158, 76, 110], alias: 'Maroon' },
	{ name: 'RASPBERRYRED', color: [209, 81, 122], alias: 'Raspberry' },
	{ name: 'BRICK', color: [167, 81, 84], alias: 'Brick' },
	{ name: 'LIGHTLIME', color: [227, 237, 85], alias: 'Light lime' },
	{ name: 'SUNFLOWER', color: [255, 181, 17], alias: 'Sunflower' },
	{ name: 'MELON', color: [255, 174, 59], alias: 'Melon' },
	{ name: 'APRICOT', color: [246, 160, 77], alias: 'Apricot' },
	{ name: 'PAPRIKA', color: [238, 127, 75], alias: 'Paprika' },
	{ name: 'PUMPKIN', color: [255, 111, 76], alias: 'Pumpkin' },
	{ name: 'BRIGHTOLIVEGREEN', color: [180, 159, 41], alias: 'Olive green' },
	{ name: 'BRIGHTGOLD', color: [186, 128, 50], alias: 'Bright gold' },
	{ name: 'COPPER', color: [189, 100, 57], alias: 'Copper' },
	{ name: 'MAHOGANY', color: [142, 89, 90], alias: 'Mahogany' },
	{ name: 'BISQUE', color: [242, 205, 207], alias: 'Bisque' },
	{ name: 'BUBBLEGUM', color: [249, 132, 202], alias: 'Bubblegum' },
	{ name: 'LIGHTMAUVE', color: [230, 181, 201], alias: 'Lightmauve' },
	{ name: 'DARKMAUVE', color: [189, 140, 166], alias: 'Darkmauve' },
	{ name: 'WINE', color: [145, 78, 114], alias: 'Wine' },
	{ name: 'GRAY', color: [146, 141, 136], alias: 'Gray' },
	{ name: 'CORAL', color: [255, 142, 145], alias: 'Coral' },
	{ name: 'WHITE', color: [255, 255, 255], alias: 'White' },
	{ name: 'AQUA', color: [94, 200, 229], alias: 'Aqua' },
	{ name: 'MINT', color: [130, 216, 213], alias: 'Mint' },
	{ name: 'CLEARMEDIUM', color: [242, 242, 242], alias: 'Clear medium' },
	{ name: 'FLUORESCENTYELLOW', color: [255, 233, 22], alias: 'Fluor yellow' },
	{ name: 'FLUORESCENTRED', color: [255, 76, 101], alias: 'Fluor red' },
	{ name: 'FLUORESCENTGREEN', color: [68, 214, 44], alias: 'Fluor green' }
];

const RISO_COLORS_ALIAS = RISOCOLORS.map((c) => c.alias);

function resolveColor(channelColor) {
	if (typeof channelColor === 'string') {
		const name = channelColor.trim().replace(/ /g, '').toUpperCase();
		const found = RISOCOLORS.find((c) => c.name === name);
		if (found) return found;
	}
	if (Array.isArray(channelColor)) {
		return { color: channelColor, name: null };
	}
	return { color: [0, 0, 0], name: null };
}

const halftonePatterns = {
	line(ctx, x, y, g, d) {
		const h = g * d;
		ctx.fillRect(x - g / 2, y - h / 2, g, h);
	},
	square(ctx, x, y, g, d) {
		const s = g * d;
		ctx.fillRect(x - s / 2, y - s / 2, s, s);
	},
	circle(ctx, x, y, g, d) {
		const r = (d * g) / 2;
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI * 2);
		ctx.fill();
	},
	ellipse(ctx, x, y, g, d) {
		const rx = (g * d * 0.7) / 2;
		const ry = (g * d) / 2;
		ctx.beginPath();
		ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
		ctx.fill();
	},
	cross(ctx, x, y, g, d) {
		ctx.fillRect(x - g / 2, y - (g * d) / 2, g, g * d);
		ctx.fillRect(x - (g * d) / 2, y - g / 2, g * d, g);
	}
};

class Riso {
	constructor(channelColor, width, height) {
		this.canvas = document.createElement('canvas');
		this.canvas.width = width;
		this.canvas.height = height;
		this.ctx = this.canvas.getContext('2d');

		const resolved = resolveColor(channelColor);
		this.channelColor = resolved.color;
		this.channelName = resolved.name;
	}

	image(img, x, y, w, h) {
		const srcW = img.width || img.videoWidth || 0;
		const srcH = img.height || img.videoHeight || 0;
		if (!srcW || !srcH) return;

		const tempCanvas = document.createElement('canvas');
		tempCanvas.width = srcW;
		tempCanvas.height = srcH;
		const tempCtx = tempCanvas.getContext('2d');
		tempCtx.drawImage(img, 0, 0);

		const imageData = tempCtx.getImageData(0, 0, srcW, srcH);
		const data = imageData.data;
		const [cr, cg, cb] = this.channelColor;

		for (let i = 0; i < data.length; i += 4) {
			const r = data[i];
			const g = data[i + 1];
			const b = data[i + 2];
			const a = data[i + 3];

			data[i] = cr;
			data[i + 1] = cg;
			data[i + 2] = cb;

			if (a < 255) {
				data[i + 3] = a;
			} else {
				data[i + 3] = 255 - (r + g + b) / 3;
			}
		}

		tempCtx.putImageData(imageData, 0, 0);
		this.ctx.drawImage(tempCanvas, x || 0, y || 0, w || srcW, h || srcH);
	}

	draw(targetCanvas) {
		const ctx = targetCanvas.getContext('2d');
		ctx.globalCompositeOperation = 'multiply';
		ctx.drawImage(this.canvas, 0, 0);
		ctx.globalCompositeOperation = 'source-over';
	}
}

function extractRGBChannel(img, c) {
	if (c === 'r' || c === 'red') c = 0;
	if (c === 'g' || c === 'green') c = 1;
	if (c === 'b' || c === 'blue') c = 2;

	const srcW = img.width || img.videoWidth || 0;
	const srcH = img.height || img.videoHeight || 0;

	const srcCanvas = document.createElement('canvas');
	srcCanvas.width = srcW;
	srcCanvas.height = srcH;
	const srcCtx = srcCanvas.getContext('2d');
	srcCtx.drawImage(img, 0, 0);
	const srcData = srcCtx.getImageData(0, 0, srcW, srcH);

	const outCanvas = document.createElement('canvas');
	outCanvas.width = srcW;
	outCanvas.height = srcH;
	const outCtx = outCanvas.getContext('2d');
	const outImageData = outCtx.createImageData(srcW, srcH);
	const outData = outImageData.data;

	for (let i = 0; i < srcData.data.length; i += 4) {
		const val = srcData.data[i + c];
		outData[i] = val;
		outData[i + 1] = val;
		outData[i + 2] = val;
		outData[i + 3] = srcData.data[i + 3];
	}

	outCtx.putImageData(outImageData, 0, 0);
	return outCanvas;
}

function ditherImage(canvas, type, threshold) {
	if (threshold === undefined) threshold = 128;
	if (type === undefined) type = 'none';

	const w = canvas.width;
	const h = canvas.height;

	const outCanvas = document.createElement('canvas');
	outCanvas.width = w;
	outCanvas.height = h;
	const outCtx = outCanvas.getContext('2d');
	outCtx.drawImage(canvas, 0, 0);

	const imageData = outCtx.getImageData(0, 0, w, h);
	const data = imageData.data;

	for (let i = 0; i < data.length; i += 4) {
		const brightness = Math.floor(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
		data[i] = brightness;
		data[i + 1] = brightness;
		data[i + 2] = brightness;
	}

	const bayerThresholdMap = [
		[15, 135, 45, 165],
		[195, 75, 225, 105],
		[60, 180, 30, 150],
		[240, 120, 210, 90]
	];

	for (let i = 0; i <= data.length; i += 4) {
		let newPixel, err;

		if (type === 'none') {
			data[i] = data[i] < threshold ? 0 : 255;
		} else if (type === 'bayer') {
			const x = (i / 4) % w;
			const y = Math.floor(i / 4 / w);
			const map = Math.floor((data[i] + bayerThresholdMap[x % 4][y % 4]) / 2);
			data[i] = map < threshold ? 0 : 255;
		} else if (type === 'floydsteinberg') {
			newPixel = data[i] < 129 ? 0 : 255;
			err = Math.floor((data[i] - newPixel) / 16);
			data[i] = newPixel;
			data[i + 4] += err * 7;
			data[i + 4 * w - 4] += err * 3;
			data[i + 4 * w] += err * 5;
			data[i + 4 * w + 4] += err * 1;
		} else {
			newPixel = data[i] < 129 ? 0 : 255;
			err = Math.floor((data[i] - newPixel) / 8);
			data[i] = newPixel;
			data[i + 4] += err;
			data[i + 8] += err;
			data[i + 4 * w - 4] += err;
			data[i + 4 * w] += err;
			data[i + 4 * w + 4] += err;
			data[i + 8 * w] += err;
		}

		data[i + 1] = data[i + 2] = data[i];
	}

	outCtx.putImageData(imageData, 0, 0);
	return outCanvas;
}

function halftoneImage(img, shape, frequency, angle, intensity) {
	if (shape === undefined) shape = 'circle';
	if (frequency === undefined) frequency = 10;
	if (angle === undefined) angle = 45;
	if (intensity === undefined) intensity = 127;

	const patternFn = typeof shape === 'function' ? shape : halftonePatterns[shape];
	if (!patternFn) return img;

	const w = img.width;
	const h = img.height;

	const rotatedCanvas = document.createElement('canvas');
	rotatedCanvas.width = w * 2;
	rotatedCanvas.height = h * 2;
	const rCtx = rotatedCanvas.getContext('2d');

	rCtx.fillStyle = '#ffffff';
	rCtx.fillRect(0, 0, w * 2, h * 2);
	rCtx.save();
	rCtx.translate(w, h);
	rCtx.rotate((-angle * Math.PI) / 180);
	rCtx.drawImage(img, -w / 2, -h / 2);
	rCtx.restore();

	const rotatedData = rCtx.getImageData(0, 0, w * 2, h * 2);
	const pixels = rotatedData.data;

	const outCanvas = document.createElement('canvas');
	outCanvas.width = w * 2;
	outCanvas.height = h * 2;
	const outCtx = outCanvas.getContext('2d');
	outCtx.fillStyle = '#ffffff';
	outCtx.fillRect(0, 0, w * 2, h * 2);
	outCtx.fillStyle = '#000000';

	const gridsize = Math.max(1, frequency);

	for (let x = 0; x < w * 2; x += gridsize) {
		for (let y = 0; y < h * 2; y += gridsize) {
			const idx = (x + y * w * 2) * 4;
			const avg = pixels[idx];

			if (avg < 255) {
				const darkness = (255 - avg) / 255;
				patternFn(outCtx, x, y, gridsize, darkness);
			}
		}
	}

	rCtx.fillStyle = '#ffffff';
	rCtx.fillRect(0, 0, w * 2, h * 2);
	rCtx.save();
	rCtx.translate(w, h);
	rCtx.rotate((angle * Math.PI) / 180);
	rCtx.drawImage(outCanvas, -w, -h);
	rCtx.restore();

	const resultCanvas = document.createElement('canvas');
	resultCanvas.width = w;
	resultCanvas.height = h;
	const resCtx = resultCanvas.getContext('2d');
	resCtx.drawImage(rotatedCanvas, w / 2, h / 2, w, h, 0, 0, w, h);

	if (intensity === false) {
		return resultCanvas;
	}

	return ditherImage(resultCanvas, 'none', intensity);
}

function drawRiso(channels, targetCanvas) {
	const ctx = targetCanvas.getContext('2d');
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0, 0, targetCanvas.width, targetCanvas.height);
	channels.forEach((c) => c.draw(targetCanvas));
}

export { RISOCOLORS, RISO_COLORS_ALIAS, Riso, extractRGBChannel, halftoneImage, drawRiso };
