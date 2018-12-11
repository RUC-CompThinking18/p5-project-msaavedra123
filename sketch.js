/*This project is reminiscent to the output at the end of the python
project where the names of victims of polic brutality were printed. I
created the background image which states "Black, Unarmed & Afraid" to emphasize
the unjust targetting and, ultimately, killings by police of black men and women.
For black men and women, and other people of color, something as simple as
being stopped by police holds the fear of something worse happening because
of the deaths like that of Philando Castile, which occurred during a traffic stop. I have
the names of black men who have died because of unjust police shootings in very
small font to demonstrate how easily their stories can be left in the background.
However, as the user moves their mouse across the screeen their names begin to expand,
this is done to illustrate how one person's attention brings more and more attention to
their stories and
the unnecessary tragedy that led to their deaths. By clicking on the screen,
the names are then highlighted by yellow to further establish the importance
of their names and their lives. The stroke, or outline, of the words is yellow because
the color scheme of Black Lives Matter is black and yellow. */




var img; //Set the variable for the background image in the global scope

function setup() {
  //Here the image "BlackAfraid.PNG) is assigned to img
  img = loadImage("assets/BlackAfraid.PNG");
  createCanvas(700, 700); //Size of the canvas which will also be the size of img


}


function draw() {
  //The img assigned above is set as the background
  background(img);
  strokeWeight(2)
  fill(0) 				//Initial colors of names set to black
  //Text size initially set at 5, as the mouse is moved across the screen
  //the text size increases in the X direction but does not move left side of text from
  //original positiion
  textSize(5+(mouseX / width)*60);
  translate(width/10, height/20);
  translate(p5.Vector.fromAngle(millis() / 1000, 15));
  //Names of victims and their location on screen
  text("Eric Garner", 50, 50)
  text("Stephon Clark", 130, 200)
  text("Philando Castile", 60, 400)
  text("Freddie Gray", 200, 580)
  text("Alton Sterling", 50, 650)
  text("Trayvon Martin", 250, 254);

  //When the mouse is pressed the stroke, or outline, changes to yellow
  if (mouseIsPressed){
    stroke(255, 255, 0)

  }
  else{
    noStroke()
  }
}
