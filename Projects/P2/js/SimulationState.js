class SimulationState extends State {
  constructor() {
    super();

    this.simulationNPCList = [];
// creating NPCs and storing them in NPCList array
// map A NPCs
    this.lampostA = new LampostA(); // mapA
    this.simulationNPCList.push(this.lampostA);
    this.pimlico = new Pimlico(); // mapA
    this.simulationNPCList.push(this.pimlico);
    this.lamotte = new Lamotte(); // mapA
    this.simulationNPCList.push(this.lamotte);
// map B NPCs
    this.janine = new Janine(); // mapB
    this.simulationNPCList.push(this.janine);
    this.marv = new Marv(); // mapB
    this.simulationNPCList.push(this.marv);
        this.lampostB = new LampostB(); // mapB
        this.simulationNPCList.push(this.lampostB);
// map C NPCs
    this.billee = new Billee(); // mapC
    this.simulationNPCList.push(this.billee);
    this.sheperd = new Sheperd(); // mapC
    this.simulationNPCList.push(this.sheperd);
    this.garbage = new Garbage(); // mapC
    this.simulationNPCList.push(this.garbage);
    this.lampostC = new LampostC(); // mapC
    this.simulationNPCList.push(this.lampostC);
    this.jade = new Jade(); // mapC
    this.simulationNPCList.push(this.jade);

  }

  update() {
    this.display();

    for (let i = 0; i < this.simulationNPCList.length; i++) {
      this.simulationNPCList[i].display();
    }

    // this.billee.display();
    // this.janine.display();
    // this.sheperd.display();
    // this.marv.display();
    // this.garbage.display();
    // this.lampostA.display();
    // this.lampostC.display();
    // this.pimlico.display();
    // this.jade.display();
    // this.lamotte.display();
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
