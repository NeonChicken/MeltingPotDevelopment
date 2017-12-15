//  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
//  Although it will work fine with this tutorial, it's almost certainly not the most current version.
//  Be sure to replace it with an updated version before you start experimenting with adding your own code.

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    var options;
    var playOnMouse;
    var playClick;
    var optionsOnMouse;
    var optionsClick;
    var click;
    var play;

function preload () {


    game.load.image('play', 'assets/pics/Play.png');
    game.load.image('options', 'assets/pics/options.png');

}



function create () {

    game.stage.backgroundColor = '#182d3b';

    play = game.add.sprite(game.world.centerX, game.world.centerY + 50, 'play');
    options = game.add.sprite(game.world.centerX, game.world.centerY + 120, 'options');

    play.anchor.set(0.5);
    options.anchor.set(0.5);

    play.inputEnabled = true;
    options.inputEnabled = true;

    play.events.onInputDown.add(clicked, this);

}

function clicked () {
    console.log('that worked!');
}

function update () {

    if (play.input.pointerOver() && play.) {
        
    }
    else if (play.input.pointerOver()) {
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

}