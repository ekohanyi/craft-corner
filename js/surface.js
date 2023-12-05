class Surface {
	constructor(ctx, dimensions, style) {
		this.ctx = ctx;
		this.initX = dimensions.initX;
		this.initY = dimensions.initY;
		this.length = dimensions.length;
		this.height = dimensions.height;
		this.legHeight = dimensions.legHeight;
		this.legOffset = dimensions.legOffset || 0;

		this.legColor = style.legColor;
		this.desktopColor = style.desktopColor;
		this.hasShadow = !!style.hasShadow;
	}

	drawLine = ({ startX, startY, endX, endY }) => {
		this.ctx.beginPath();
		this.ctx.moveTo(startX, startY)
		this.ctx.lineTo(endX, endY)
		this.ctx.stroke();
		this.ctx.closePath();
	}

	drawTopLeftLeg = () => {
		const startX = this.initX + this.legOffset;
		const startY = this.initY;
		const endY = this.initY + this.legHeight;

		this.drawLine({ startX, startY, endX: startX, endY })
	}

	drawTopRightLeg = () => {
		const startX = this.initX + this.length - this.legOffset;
		const startY = this.initY;
		const endY = this.initY + this.legHeight;

		this.drawLine({ startX, startY, endX: startX, endY })
	}

	drawBottomRightLeg = () => {
		const startX = this.initX + this.length - this.height + 1 - this.legOffset;
		const startY = this.initY + this.height;
		const endY = this.initY + this.height + this.legHeight;

		this.drawLine({ startX, startY, endX: startX, endY })
	}

	drawBottomLeftLeg = () => {
		const startX = this.initX - this.height + 1 + this.legOffset;
		const startY = this.initY + this.height;
		const endY = this.initY + this.height + this.legHeight;

		this.drawLine({ startX, startY, endX: startX, endY })
	}

	drawLegs = () => {
		this.drawTopLeftLeg();
		this.drawTopRightLeg();
		this.drawBottomRightLeg();
		this.drawBottomLeftLeg();
	}

	drawTopShadow = () => {
		if (!this.hasShadow) return;

		this.ctx.strokeStyle = "#E9ECEF"
		for (let i = 0; i < this.height; i++) {
			this.drawLine({
				startX: this.initX - i,
				startY: this.initY + this.height - 1 + i,
				endX: this.initX - i + this.length,
				endY: this.initY + this.height - 1 + i
			})
		}
	}

	drawTop = () => {
		for (let i = 0; i < this.height; i++) {
			this.drawLine({
				startX: this.initX - i,
				startY: this.initY + i,
				endX: this.initX - i + this.length,
				endY: this.initY + i
			})
		}
	}

	draw = () => {
		this.drawTopShadow();

		this.ctx.strokeStyle = this.legColor;
		this.drawLegs()

		this.ctx.strokeStyle = this.desktopColor;
		this.drawTop()
	}
}