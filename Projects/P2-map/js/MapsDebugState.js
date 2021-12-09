class MapsDebugState extends State {
  constructor(itemImagesList, mapsArray) {
    super();

    // this.npcArray = new NPCList(); //?! is this the equivalent of inputing an array full //
    // of NPC class object? will I be able to call upon the NPCs in this array
    // to display them and have player interact with them?

    // Items are to be set up in the main script
    // When game is started, every Item is created and stored somewhere
    // Some are on the map and can be picked up by being walked on
    // Other will be on NPCs and will be tradeable.
    this.maps = [mapsArray[0],mapsArray[1],mapsArray[2]]; // a triptych cityscape
    this.map = undefined;
    this.player = new Player(109, 597);
    this.currentMap = mapsArray[1];

  }

  update() { // updates every frame, it serves a drawing function
    background(0);
    fill(255);
    textAlign(CENTER);
    // This text is in the background, gives player how to play
    text(`press space to change maps!`, width/ 2, height/2);

    this.map = this.currentMap;
    this.map.display(this.player);
    this.player.barriers(this.map);

      this.player.handleInput(); // handle player input: up, down, left, right, w,s,a,d,
      this.player.move(); // change the player avatar's position
      //this.player.display(); // display the player avatar





    }

  display() {}

  mouseClicked(){ // click to check where x is, debug method
    console.log(`x ${this.player.x} ,y ${this.player.y}
      and speed vx vy are ${this.player.speed} ${this.player.vx} ${this.player.vy}`);
  }

  keyPressed() { // change state ###
    if (keyCode === RETURN) {
      console.log(`pressed enter current map is ${this.currentMap.lampX}`);
      this.currentMap = random(this.maps);
      this.player.barriers(this.currentMap);
      console.log(`new map is ${this.currentMap.lampX}`)
    }
  }
}
