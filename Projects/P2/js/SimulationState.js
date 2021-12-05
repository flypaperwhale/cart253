class SimulationState extends State {
  constructor() {
    super();
    this.simulationNPCList = [];
    this.createNPCs(); // creating NPCs and storing them in NPCList array

  }

  update() {
    this.display();

    for (let i = 0; i < this.simulationNPCList.length; i++) {
      this.simulationNPCList[i].display();
    }

  }

  createNPCs(){
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

  display() {
    background(0);
    fill(255);

    push();
    textAlign(CENTER);
    text(`You have made it to debug state.`, width / 2, height / 2);
    pop();
  }
}
