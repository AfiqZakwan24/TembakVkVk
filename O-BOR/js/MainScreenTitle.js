var MainScreenTitle = Base();

// Visibility handling
MainScreenTitle.prototype.visible = true;
MainScreenTitle.prototype.hide = function() { this.visible = false; };
MainScreenTitle.prototype.show = function() { this.visible = true; };

// Properties
MainScreenTitle.prototype.charImage = 'images/sprites.png';
MainScreenTitle.prototype.charSpacing = 1;
MainScreenTitle.prototype.charSize =  [34,40] 
MainScreenTitle.prototype.charMap = {
	'T' : [129,0],
	'E' : [163,0],
	'M' : [197,0],
	'B' : [231,0],
	'A' : [265,0],
	'K' : [299,0],
	'O' : [333,0],
	'R' : [367,0]
	
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