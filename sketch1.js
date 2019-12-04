function setup() 
{
    createCanvas(500,500);
    background(255);
    translate(0, 250);
  
    //Draw the centre line at y=0:
    for (var t = 0; t < 500; ++t) {
        point(t, 0);
    }
  
    //Now draw the three sine curves:
    strokeWeight(4);
  
    //Draw the first sine in red:
    stroke(255, 0, 0);
    for (var t = 0; t < 500; ++t) {
        var sin1_t = 100*Math.sin((2*Math.PI*0.002*t)+(2*Math.PI));
        point(t, -1 * sin1_t);
    } 
  
    //Draw the second sine in blue:
    stroke(0, 0, 255);
    for (var t = 0; t < 500; ++t) {
        var sin1_t = 50*Math.sin((2*Math.PI*0.01*t)+(2*Math.PI));
        point(t, -1 * sin1_t);
    }
  
    //Draw the third sine in green:
    stroke(0, 255, 0);
    for (var t = 0; t < 500; ++t) {
        var sin1_t = 200*Math.sin((2*Math.PI*0.006*t)+(Math.PI));
        point(t, -1 * sin1_t);
    } 
}
