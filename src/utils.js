import game from './game';
import Defs from './defs';

export default {
	CreateDialog: (w, h, r) => {
		r = r || 2;
		let dialog = [];
		for (var y = 0; y < h; y++) {
			let line = '';
			for (var x = 0; x < w; x++) {
				if (x + y < r || w-1 - x + y < r || x + h-1 - y < r || w-1 - x + h-1 - y < r)
					line += '.';
				else if (x == 0 || y == 0 || x == w-1 || y == h-1
					|| x + y == r || w-1 - x + y == r || x + h-1 - y == r || w-1 - x + h-1 - y == r)
					line += '0';
				else line += 'F'; 
			}
			dialog.push(line);
		}

		return game.create.texture(null, dialog, Defs.PIXEL_SIZE, Defs.PIXEL_SIZE, 0, false);
	},

	// Should only be used in a preload method because generating an image and adding to cache is async
	CreateDummySprite: (name, w, h, color="#FFFFFF") => {
		let bmd = game.add.bitmapData(w, h);
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, w, h);
		bmd.ctx.fillStyle = color;
		bmd.ctx.fill();
		game.load.imageFromBitmapData(name, bmd);
	}
};