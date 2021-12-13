class TitleState2 extends State {
  constructor(simulationImagesList, mapsArray, simulationSoundsArray) { // program arrays fed through
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
    text(`Buttons:


      'up', 'down', 'left', 'right'

      'Space' to interact

      'Return' to display item



      - Press Space to start -    `, width / 2, height / 2.5);
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
