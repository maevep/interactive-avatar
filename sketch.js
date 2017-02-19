// Maeve Potter, mp0000@bard.edu, no collaboration, everything works well, I think I need another dynamic aspect

    function setup() {
createCanvas(500, 500);
        
    }





function draw() {
    
background(255);
      text("Hold down 's' to scare", 135, 50);
 if (key == "s"){
     strokeWeight(random(4));
   }
  

    ellipse(random(0, width), 
          random(0, height), 5, 5);
 
   
    
  
  
  
    // hair
   fill(203, 109, 81);
   rect(110, 138, 180, 200);
    // legs
    fill(236, 213, 197);
ellipse(160, 480, 60, 150);
    ellipse(240, 480, 60, 150);
     // arms
    fill(236, 213, 197);
ellipse(140, 330, 40, 90);
    ellipse(260, 330, 40, 90);
    // body
fill(236, 213, 197);
       ellipse(200, 360, 140, 220);
    // head
    ellipse(200, 200, 150, 125);
    // mouth
       fill(200, 200, 200);
ellipse(200, 235, 40, 20);
    // nose
  fill(253, 213, 177);
 ellipse(200, 205, 10, 15);
    //button
    fill(100, 100, 100);
 ellipse(200, 420, 5, 5);
      // blush
  fill(246, 166, 201);
 ellipse(250, 215, 25, 10);
     ellipse(150, 215, 25, 10);
   // eyes
      fill(0, 0, 0);
    triangle(150, 190, 130, 180, 150, 180);
    fill(255, 255, 255);
ellipse(150, 190, 20, 20);
    fill(205,133,63);
    ellipse(150, 190, 9, 9);
    fill(0, 0, 0);
    ellipse(150, 190, 4, 4);
     fill(0, 0, 0);
    triangle(250, 180, 245, 190, 270, 180)
    fill(255, 255, 255);
ellipse(250, 190, 20, 20);
    fill(205,133,63);
    ellipse(250, 190, 9, 9);
    fill(0, 0, 0);
    ellipse(250, 190, 4, 4);
    // bangs
    
fill(203, 109, 81);
rect(130, 138, 140, 30);
    // brows
 rect(140, 170, 25, 5);
    rect(235, 170, 25, 5);
    //censor
    fill(0, 0, 0);
rect(135, 300, 130, 50);
    rect(165, 440, 70, 40);
     
}
