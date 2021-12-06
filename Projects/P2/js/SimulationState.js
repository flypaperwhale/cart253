class SimulationState extends State {
  constructor(itemImagesList) {
    super();

    this.player = new Player(300,300); // TEMPORARILY UNDER ITEMS/NPCS TO USE INVENTORY FOR DEBUGGING

    this.simulationItemList = []; // array to manage items
    this.createItems(); // creating Items, to be found and exchanged

    this.simulationNPCList = [];
    this.createNPCs(); // creating NPCs and storing them in NPCList array


  }

  createItems() {
    this.slingshot = new Slingshot(itemImagesList[0]);
    this.player.inventory.push(this.slingshot);//
//
    this.ham = new Ham(itemImagesList[1]);
    this.player.inventory.push(this.ham);//
//
    this.bigBone = new BigBone(itemImagesList[2]);
    this.player.inventory.push(this.bigBone);//
//
    this.frog = new Frog(itemImagesList[3]);
    this.player.inventory.push(this.frog);//
//
    this.wrench = new Wrench(itemImagesList[4]);
    this.player.inventory.push(this.wrench);//
//
    this.injunction = new Injunction(itemImagesList[5]);
    this.player.inventory.push(this.injunction);//
//
  }

  createNPCs() {
    // map A NPCs
    this.streetLightA = new StreetLightA(); // mapA
    this.simulationNPCList.push(this.streetLightA);
    this.pimlico = new Pimlico(); // mapA
    this.simulationNPCList.push(this.pimlico);
    this.lamotte = new Lamotte(); // mapA
    this.simulationNPCList.push(this.lamotte);
    // map B NPCs
    this.janine = new Janine(); // mapB
    this.simulationNPCList.push(this.janine);
    this.marv = new Marv(); // mapB
    this.simulationNPCList.push(this.marv);
    this.streetLightB = new StreetLightB(); // mapB
    this.simulationNPCList.push(this.streetLightB);
    // map C NPCs
    this.billee = new Billee(); // mapC
    this.simulationNPCList.push(this.billee);
    this.sheperd = new Sheperd(); // mapC
    this.simulationNPCList.push(this.sheperd);
    this.garbage = new Garbage(); // mapC
    this.simulationNPCList.push(this.garbage);
    this.streetLightC = new StreetLightC(); // mapC
    this.simulationNPCList.push(this.streetLightC);
    this.jade = new Jade(); // mapC
    this.simulationNPCList.push(this.jade);
  }

  update() {
    this.display(); // simulation state display method

  this.player.display(); // display the player avatar

    // go through the NPC array to display each NPC (according to the map player is on)
    // also, check if player is colliding and update the NPC's data if need be (from click & trade)
    for (let i = 0; i < this.simulationNPCList.length; i++) {
      this.simulationNPCList[i].display();
      this.simulationNPCList[i].playerCollisionCheck(this.player.x,this.player.y);
    }

    // for (let i = 0; i < this.player.inventory.length; i++) {
    //   this.player.inventory[i].display();
    //   this.player.inventory[i].playerCollisionCheck(this.player.x,this.player.y);
    // }

    this.slingshot.display();
    this.slingshot.playerCollisionCheck();


    // Check if player is paused (when textBubble appears)
    if (this.player.isPaused === true) { // if player is paused
      this.player.vx = 0; // turn player velocity to 0
      this.player.vy = 0;
    } else if (this.player.isPaused === false) { // if player is not paused
      this.player.handleInput(); // handle player input: up, down, left, right, w,s,a,d,
      this.player.move(); // change the player avatar's position
    }

    this.player.display(); // display the player avatar
  }

  display() {
    background(0);
    fill(255);

    push();
    textAlign(CENTER);
    text(`You have made it to debug state.`, width / 2, height / 2);
    pop();
  }
}
