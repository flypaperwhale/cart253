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
    text(`- INTERRUPT SKYGLOW -

Trading Sequence Short Game

      This evening Dolly caught a glimpse of a sight of a constellation
      as the sun was setting. The view was interrupted by the city's
      skyglow. As if from out of the blue, Dolly decided to take action!

      Play as Dolly as she quests to Interrupt Skyglow!

      - Press Space -
      `, width / 2, height / 2.5);
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
