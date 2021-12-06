class SimulationState extends State {
  constructor(itemImagesList) {
    super();

    this.simulationItemList = []; // array to manage items
    this.createItems(); // creating Items, to be found and exchanged

    this.simulationNPCList = [];
    this.createNPCs(); // creating NPCs and storing them in NPCList array
  }

  createItems() {
    this.slingshot = new Slingshot(itemImagesList[0]);
    this.ham = new Ham(itemImagesList[1]);
    this.bigBone = new BigBone(itemImagesList[2]);
    this.frog = new Frog(itemImagesList[3]);
    this.wrench = new Wrench(itemImagesList[4]);
    this.injunction = new Injunction(itemImagesList[5]);
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
    this.display();

    for (let i = 0; i < this.simulationNPCList.length; i++) {
      this.simulationNPCList[i].display();
    }

    this.slingshot.display();
    this.slingshot.playerCollide();
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
