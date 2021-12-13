class TitleState2 extends State {
  constructor(simulationImagesList, mapsArray, simulationSoundsArray) {
    super();
    this.name = `Title State`;
    this.mapsArray = mapsArray;
    this.simulationImagesList = simulationImagesList;
    this.simulationSoundsArray = simulationSoundsArray;
  }

  update() {
    this.display();
  }

  display() {
    background(0);
    fill(255);

    push();
    textAlign(CENTER);
    text(`TWO Welcome. Click mouse to start.`, width / 2, height / 2);
    pop();
  }

  keyPressed() {
    if (keyCode === 32) {
      state = new SimulationState(
        this.simulationImagesList,
        this.mapsArray,
        this.simulationSoundsArray
      );
        }
      }

  mouseClicked() {
}
}
