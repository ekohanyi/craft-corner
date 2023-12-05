class PixelArt {
	constructor() {
		this.canvas = document.getElementById('main-canvas');
		this.ctx = this.canvas.getContext("2d");

		this.ctx.scale(8, 8)
		this.ctx.lineWidth = 1;
		this.ctx.lineJoin = 'miter';
		this.ctx.lineCap = 'square'
	}

	drawShelf = () => {
		const dimensions = {
			initX: 36,
			initY: 41,
			length: 60,
			height: 7,
			legHeight: 5,
		};

		const style = {
			legColor: 'cyan',
			desktopColor: 'orange'
		}

		new Surface(this.ctx, dimensions, style).draw()
	}

	drawDesktop = () => {
		const dimensions = {
			initX: 36,
			initY: 47,
			length: 60,
			height: 16,
			legHeight: 20,
		};

		const style = {
			legColor: 'gray',
			desktopColor: 'red'
		}

		new Surface(this.ctx, dimensions, style).draw()
	}

	draw = () => {
		this.drawDesktop();
		this.drawShelf();
	}
}

new PixelArt().draw();