class SimulationState extends State {
  constructor() {
    super();

    this.billee = new Billee();
    this.janine = new Janine();
    this.sheperd = new Sheperd();
    this.marv = new Marv();
    this.garbage = new Garbage();
    this.lampostA = new LampostA();
    this.lampostC = new LampostC();
    this.pimlico = new Pimlico();
    this.jade = new Jade();
    this.lamotte = new Lamotte();


}

update(){
  this.display();

  this.billee.display();
  this.janine.display();
  this.sheperd.display();
  this.marv.display();
  this.garbage.display();
  this.lampostA.display();
  this.lampostC.display();
  this.pimlico.display();
  this.jade.display();
  this.lamotte.display();

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
