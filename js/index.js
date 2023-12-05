class PixelArt {
	constructor() {
		this.canvas = document.getElementById('main-canvas');
		this.ctx = this.canvas.getContext("2d");

		this.ctx.scale(8, 8)
		this.ctx.lineWidth = 1;
		this.ctx.lineJoin = 'miter';
		this.ctx.lineCap = 'square'
		this.desktopColor = '#F8F9FA'
		this.legColor = '#826C7F';
	}

	drawShelf = () => {
		const dimensions = {
			initX: 36,
			initY: 41,
			length: 60,
			height: 7,
			legHeight: 5,
			legOffset: 3,
		};

		const style = {
			legColor: this.legColor,
			desktopColor: this.desktopColor,
			hasShadow: true,
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
			legColor: this.legColor,
			desktopColor: this.desktopColor
		}

		new Surface(this.ctx, dimensions, style).draw()
	}

	draw = () => {
		this.drawDesktop();
		this.drawShelf();
	}
}

new PixelArt().draw();