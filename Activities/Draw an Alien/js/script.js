/**
Frankie's Lil Alien
Frankie Latreille

This program draws an alien, as imagined by Frankie.
*/

/**
Attempt to draw an alien with code
*/
function setup() {
  createCanvas(800,800);// a rather large canvas
  background("#abcdef");// a nice blue indeed

  // draw the planet land horizon
  fill(0,0,0); // black
  rectMode(CORNER);
  rect(0,649,800,150);

  // draw the alien
  noStroke();
  ellipseMode(CENTER);
  fill(127,127,127); // gray
  ellipse(400,400,525); // big gray floating head
  fill(120,120,120); // a darker gray
  ellipse(400,415,300); // a big gaping hole
  fill(100,100,100); // an even darker gray
  ellipse(400,430,120); // deeper into the hole
  fill(40,40,40); // almost black
  ellipse(400,444,50); // a throat?




}


/**
Description of draw()
*/
function draw() {

}
