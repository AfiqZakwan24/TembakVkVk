var MainScreenTitle = Base();

// Visibility handling
MainScreenTitle.prototype.visible = true;
MainScreenTitle.prototype.hide = function() { this.visible = false; };
MainScreenTitle.prototype.show = function() { this.visible = true; };

// Properties
MainScreenTitle.prototype.charImage = 'images/sprites.png';
MainScreenTitle.prototype.charSpacing = 5;
MainScreenTitle.prototype.charSize =  [30,40] //P-26 E-26 T-29 A-30 I-9 K-30 N-28
MainScreenTitle.prototype.charMap = {
	'T' : [128,0],
	'U' : [158,0],
	'O' : [188,0],
	'R' : [218,0],
	'I' : [248,0],
	'A' : [278,0],
	'L' : [308,0]
	
};

MainScreenTitle.prototype.text = '';
MainScreenTitle.prototype.x = 0;
MainScreenTitle.prototype.y = 0;

MainScreenTitle.prototype.draw = function() {
	if (this.visible === false) {
		return false;
	}
	
    
	var bipmap = new BipMap();
	bipmap.image = game.sprites;
	for (var i=0; i<this.text.length; i++) {
		bipmap.drawSprite(this.charMap[this.text[i]][0], this.charMap[this.text[i]][1], this.charSize[0], this.charSize[1], this.x + (this.charSize[0]+this.charSpacing)*i, this.y);
	}
};