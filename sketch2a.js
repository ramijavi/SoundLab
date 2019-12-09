var audio = new maximJs.maxiAudio();
var oscillator = new maximJs.maxiOsc();
var oscillator2 = new maximJs.maxiOsc();
var oscillator3 = new maximJs.maxiOsc();

var ampInput, freqInput, button, ampText,freqText;

var drawValues = [];
var counter = 0;
var freq = 100;
var amp = 0;

var isPlaying = true;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  audio.play = playLoop;
  //audio.init();
  textAlign(CENTER);
  textSize(50);
 
 // fill(255);
  ampText = createElement('h4', 'Amp');
  ampText.position(width/10,43);
  ampInput = createInput();
  ampInput.position(width/10 +40, 65);
  freqText = createElement('h4', 'Freq');
  freqText.position(width/10,68);
  freqInput = createInput();
  freqInput.position(width/10+40, 90);

  button = createButton('submit');
  button.position(ampInput.x + ampInput.width+10, 65);
  button.mousePressed(submitValue);


  for(var i = 0; i<512; i++){
      drawValues.push(0);
  }
}

function draw()
{
    background(200); 
    if (!isPlaying){
        amp = 0;
    }
    
    drawWave();

    text("Amp: " + nf(amp,1,2), button.x, button.y+100);
    text("Freq: " + nf(freq,4,0), button.x, button.y+150); 
}

function drawWave(){
    stroke(255);
    noFill();
    beginShape();
    for(var i = 0; i<512; i++){
        vertex(i*width/512,drawValues[i] *200 + height/2 + 100);
    }
    endShape();
}

function playLoop()
{
  this.output = oscillator.sinewave(freq) * oscillator2.sinewave(800) * oscillator3.sinewave(400) * amp;
  drawValues.push(this.output);
  drawValues.shift();
}

function submitValue(){
    isPlaying = true;
    audio.init()
    var ampTemp = parseFloat(ampInput.value());
    var freqTemp = parseFloat(freqInput.value());
    amp = ampTemp>1? 1: ampTemp;
    freq = freqTemp;
}


function keyPressed() 
{
  if (key == ' ') {
    isPlaying = !isPlaying;
  }
}
