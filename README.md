# MeltingPotDevelopment
MeltingPotDevelopment

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//All of this is for having a clickable button

//add this to variables
  var readyButton;
  
//add this to function preload()
  game.load.image('readyButton', 'assets/readyButton.jpg');

//add this to function create()
  readyButton = game.add.sprite(game.world.centerX, game.world.centerY, 'readyButton');
  readyButton.inputEnabled = true;
  readyButton.input.useHandCursor = true; //this causes the handcursor to appear if you hover over the object

//add this to function update()
  //this causes something to happen when clicking a sprite
    readyButton.events.onInputDown.add(onClick, this);

//add this as its own function, so not under any other of the already existing functions
  function onClick(target, pointer) {
   console.log('this works');
  }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
