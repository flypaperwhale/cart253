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
  triangle(30,650,75,600,120,650); // mountain or pyramid;
  triangle(700,650,720,620,740,650); // mountain or pyramid;
  rectMode(CORNER);
  rect(0,649,800,150);

  // draw the moon
  noStroke();
  fill(255,255,255);
  ellipseMode(CENTER);
  ellipse(75,75,40);

  // draw the alien
  noStroke();
  ellipseMode(CENTER);
  fill(127,127,127); // gray
  ellipse(400,400,525); // big gray floating head
  fill(120,120,120); // a darker gray
  ellipse(400,415,300); // a big gaping hole
  fill(100,100,100); // an even darker gray
  ellipse(400,430,120); // deeper into the hole
  fill(50,50,50); // almost black
  ellipse(400,444,50); // a throat?

  // draw the teeth
  fill(255,255,255);//white
  triangle(340,300,360,290,372,372);
  triangle(230,400,240,390,300,405);
  triangle(355,550,360,552,363,510);
  triangle(300,600,305,595,309,599);
  triangle(445,340,450,395,455,345);
  triangle(550,430,573,370,579,375);




}


/**
Description of draw()
*/
function draw() {

}
