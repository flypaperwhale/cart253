class SimulationState extends State {
  constructor() {
    super();

    this.simulationNPCList = [];


    this.billee = new Billee(); // mapC
    this.simulationNPCList.push(this.billee);
    // this.janine = new Janine(); // mapB
    // this.sheperd = new Sheperd(); // mapC
    // this.marv = new Marv(); // mapB
    // this.garbage = new Garbage(); // mapC
    // this.lampostA = new LampostA(); // mapA
    // this.lampostB = new LampostA(); // mapA
    // this.lampostC = new LampostC(); // mapC
    // this.pimlico = new Pimlico(); // mapA
    // this.jade = new Jade(); // mapC
    // this.lamotte = new Lamotte(); // mapA


}

update(){
  this.display();

for (let i = 0; i < this.simulationNPCList.length; i++){
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

display(){
  background(0);
  fill(255);

  push();
  textAlign(CENTER);
  text(`You have made it to debug state.`, width/2, height/2);
  pop();

}

}
