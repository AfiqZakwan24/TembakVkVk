var MainScreen = Base();

MainScreen.prototype.insert = function() {
	var bg = new Rectangle();
	bg.set({
		x : 0,
		y : 0,
		width : game.canvas.width,
		height : game.canvas.height,
		color : '#000'
	});
	game.layerManager.addToBottom('title.bg', bg);
	
	var title1 = new MainScreenTitle();
	title1.set({
		x : 32,
		y : 16,
		text : 'TEMBAK'
	});
	game.layerManager.addToTop('title.title1', title1);
	
	var titleLine = new Rectangle();
	titleLine.set({
		x : 32,
		y : 64,
		width : 210,
		height : 2,
		color : '#EA9E22'
	});
	game.layerManager.addToTop('title.titleLine', titleLine);
	
	
	var title2 = new MainScreenTitle();
	title2.set({
		x : 88,
		y : 72,
		text : 'IKAN'
	});
	game.layerManager.addToTop('title.title2', title2);
	
	//var copyrightText = ' 2021 SK SULTANAH ASMA '.split('');
	//copyrightText.unshift('copy');
	//var copyright = new Text();
	//copyright.set({
		//text : copyrightText,
		//x : 40,
		//y : 200
	//});
	//game.layerManager.addToTop('title.copyright', copyright);
	
	var gameA = new Text();
	gameA.set({
		text : 'MAIN TEMBAK IKAN',
		x : 50,
		y : 128,
		color : '#EA9E22'
	});
	game.layerManager.addToTop('title.gameA', gameA);
	
	var gameB = new Text();
	gameB.set({
		text : 'Sila tembak IKAN',
		x : 40,
		y : 150,
		color : '#E84438'
	});
	game.layerManager.addToTop('title.gameB', gameB);
	
	var gameC = new Text();
	gameC.set({
		text : 'dengan butang tetikus',
		x : 40,
		y : 160,
		color : '#E84438'
	});
	game.layerManager.addToTop('title.gameC', gameC);
	
	var arrow = new Text();
	arrow.set({
		text : ['arrow'],
		x : 40,
		y : 128
	});
	game.layerManager.addToTop('title.arrow', arrow);
	
	var topScore = new Text();
	topScore.set({
		text : 'MARKAH MAKSIMUM = 999999',
		x : 36,
		y : 184,
		color : '#5CE430'
	});
	game.layerManager.addToTop('title.topScore', topScore);
	
	/* Flashes that get trigerred when the player shoots a duck */
	var flash = new Flash();
	game.layerManager.addToTop('title.flash', flash);
	
	var _this = this;
	var clickHandler = function(e) {
		flash.start();
		
		setTimeout(function() {
			_this.fireEvent('choice', { choice : 'A' });
			game.removeEventListener('click', clickHandler);
		},250);
	};
	game.addEventListener('click', clickHandler);
	
	// Play main screen music
	game.sound.play('start_game');
};

MainScreen.prototype.remove = function() {
	game.layerManager.removeAll();
};
