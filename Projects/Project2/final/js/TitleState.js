class TitleState extends State {
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
    text(`ONE  Welcome. Click mouse to start.`, width / 2, height / 2);
    pop();
  }

  keyPressed() {
    if (keyCode === 32) {
      state = new TitleState2(
        this.simulationImagesList,
        this.mapsArray,
        this.simulationSoundsArray
      );
        }
      }

  mouseClicked() {
}
}
