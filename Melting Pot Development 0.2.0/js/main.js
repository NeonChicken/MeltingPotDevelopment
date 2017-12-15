var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    var options;
    var clickSfx;
    var play;
    var menuMusic;
    var musicButton;

function preload() {

	game.load.image('sfxButton', 'assets/sfx.png');
	game.load.image('plusMusicButton', 'assets/plus.png');
	game.load.image('minusMusicButton', 'assets/minus.png');
	game.load.image('plusSfxButton', 'assets/plus.png');
	game.load.image('minusSfxButton', 'assets/minus.png');
    game.load.image('play', 'assets/play.png');
    game.load.image('options', 'assets/options.png');
    game.load.image('musicButton', 'assets/musicButton.png');
    game.load.audio('click', 'assets/click.mp3');
    game.load.audio('menuMusic', 'assets/menumusic.mp3');

}

function create() {

    game.stage.backgroundColor = '#182d3b';

    menuMusic = game.add.audio('menuMusic');
    clickSfx = game.add.audio('click');

    play = game.add.sprite(game.world.centerX, game.world.centerY + 50, 'play');
    options = game.add.sprite(game.world.centerX, game.world.centerY + 120, 'options');
    
    play.anchor.set(0.5);
    options.anchor.set(0.5);

    play.inputEnabled = true;
    options.inputEnabled = true;

    play.input.useHandCursor = true;
    options.input.useHandCursor = true;

    plusMusicButton = game.add.sprite(game.world.centerX + 250, game.world.centerY + 250, 'plusMusicButton');
    plusMusicButton.anchor.set(0.5);
    plusMusicButton.inputEnabled = true;
    plusMusicButton.events.onInputDown.add(onPlusMusicButton, this);

    minusMusicButton = game.add.sprite(game.world.centerX + 220, game.world.centerY + 250, 'minusMusicButton');
    minusMusicButton.anchor.set(0.5);
    minusMusicButton.inputEnabled = true;
    minusMusicButton.events.onInputDown.add(onMinusMusicButton, this);

    plusSfxButton = game.add.sprite(game.world.centerX + 250, game.world.centerY + 180, 'plusSfxButton');
    plusSfxButton.anchor.set(0.5);
    plusSfxButton.inputEnabled = true;
    plusSfxButton.events.onInputDown.add(onPlusSfxButton, this);

    minusSfxButton = game.add.sprite(game.world.centerX + 220, game.world.centerY + 180, 'minusSfxButton');
    minusSfxButton.anchor.set(0.5);
    minusSfxButton.inputEnabled = true;
    minusSfxButton.events.onInputDown.add(onMinusSfxButton, this);

    musicButton = game.add.sprite(game.world.centerX + 320, game.world.centerY + 250, 'musicButton');
    musicButton.anchor.set(0.5);
    musicButton.inputEnabled = true;
    musicButton.events.onInputDown.add(onMusicButton, this);

    sfxButton = game.add.sprite(game.world.centerX + 320, game.world.centerY + 180, 'sfxButton');
    sfxButton.anchor.set(0.5);
    sfxButton.inputEnabled = true;
    sfxButton.events.onInputDown.add(onSfxButton, this);



    
    menuMusic.play();
    menuMusic.loopFull(2.41); //2 minutes 41 seconds//
    menuMusic.volume = 0.5;

    clickSfx.volume = 0.3;
}

function update() {

    play.events.onInputDown.add(onPlay, this);
    options.events.onInputDown.add(onOptions, this);
    musicButton.events.onInputDown.add(onMusicButton, this);
    sfxButton.events.onInputDown.add(onSfxButton, this);

    if (play.input.pointerOver()) {
        play.alpha = 3; 
    }
    else {
        play.alpha = 0.5;
    }

    if (options.input.pointerOver()) {
        options.alpha = 3;
    }
    else {
        options.alpha = 0.5;
    }

    if (musicButton.input.pointerOver()) {
        musicButton.alpha = 3;
    }
    else {
        musicButton.alpha = 0.5;
    }

    if (sfxButton.input.pointerOver()) {
        sfxButton.alpha = 3;
    }
    else {
        sfxButton.alpha = 0.5;
    }

    if (minusMusicButton.input.pointerOver()) {
        minusMusicButton.alpha = 3;
    }
    else {
        minusMusicButton.alpha = 0.5;
    }

    if (plusMusicButton.input.pointerOver()) {
        plusMusicButton.alpha = 3;
    }
    else {
        plusMusicButton.alpha = 0.5;
    }

    if (minusSfxButton.input.pointerOver()) {
        minusSfxButton.alpha = 3;
    }
    else {
        minusSfxButton.alpha = 0.5;
    }

    if (plusSfxButton.input.pointerOver()) {
        plusSfxButton.alpha = 3;
    }
    else {
        plusSfxButton.alpha = 0.5;
    }
    

}

function onPlay(target, pointer) {
    clickSfx.play();
    game.stage.backgroundColor = '#4286f4';
}

function onOptions(target, pointer) {
    clickSfx.play();
    game.stage.backgroundColor = '#f44242';

}

function onMusicButton(target, pointer) {
    game.stage.backgroundColor = '#71f442';
    clickSfx.play();
    if (menuMusic.volume >= 0.1) {
        menuMusic.volume = 0;
        console.log('Music muted.');
    }
    else if (menuMusic.volume <= 0.9) {
        menuMusic.volume = 0.5;
        console.log('Music returned to 50% volume.');
    }
}

function onSfxButton(target, pointer) {
    game.stage.backgroundColor = '#dff442';
    clickSfx.play();
    if (clickSfx.volume >= 0.1) {
        clickSfx.volume = 0;
        console.log('Sfx muted.');
    }
    else if (clickSfx.volume <= 0.9) {
        clickSfx.volume = 0.5;
        console.log('Sfx returned to 50% volume.');
    }
}

function onPlusMusicButton(target, pointer) {
	clickSfx.play();
	if (menuMusic.volume <= 0.9) {
		menuMusic.volume += 0.1;
		console.log('Music increased by 10%');
	}
	else if (menuMusic.volume >= 1) {
		menuMusic.volume = 1.0;
		console.log('Music volume already at maximum value!');
	}
	else if (menuMusic.volume = 1) {
		menuMusic.volume = 1.0;
		console.log('Music volume at maximum amount!');
	}
}

function onMinusMusicButton(target, pointer) {
	clickSfx.play();
	if (menuMusic.volume >= 0.1) {
		menuMusic.volume -= 0.1;
		console.log('Music decreased by 10%');
	}
	else if (menuMusic.volume <= 0) {
		menuMusic.volume = 0;
		console.log('Music volume already at minimum value!');
	}
	else if (menuMusic.volume = 0) {
		menuMusic.volume = 0;
		console.log('Music volume at minimum amount!');
	}
}

function onPlusSfxButton(target, pointer) {
	clickSfx.play();
	if (clickSfx.volume <= 0.9) {
		clickSfx.volume += 0.1;
		console.log('Sfx increased by 10%');
	}
	else if (clickSfx.volume >= 1) {
		clickSfx.volume = 1.0;
		console.log('Sfx volume already at maximum value!');
	}
	else if (clickSfx.volume = 1) {
		clickSfx.volume = 1.0;
		console.log('Sfx volume at maximum amount!');
	}
}

function onMinusSfxButton(target, pointer) {
	clickSfx.play();
	if (clickSfx.volume >= 0.1) {
		clickSfx.volume -= 0.1;
		console.log('Sfx decreased by 10%');
	}
	else if (clickSfx.volume <= 0) {
		clickSfx.volume = 0;
		console.log('Sfx volume already at minimum value!');
	}
	else if (clickSfx.volume = 0) {
		clickSfx.volume = 0;
		console.log('Sfx volume at minimum amount!');
	}
}