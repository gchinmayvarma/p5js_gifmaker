let i_am_sure_i_concent_to_the_animation = true;
let animation_name = "MaxwellsGif";
let Resx = 400;
let Resy = 400;
let framee = 0;
let started_animation = false;
let stop_frame;
let mightycanvas, firstframecanvas, lastframecanvas;

function setup() {
  mightycanvas = createCanvas(Resx, Resy, WEBGL);
  firstframecanvas = new p5(temp_sketch);
  lastframecanvas = new p5(temp_sketch);
  frameRate(5);
  fsetup();
  stop_frame = TWO_PI * 70
}

function draw() {
  fdraw();
  
  if (started_animation) {
    if (framee === 0) {
      firstframecanvas.copy(mightycanvas, 0, 0, Resx, Resy, 0, 0, Resx, Resy);
    }
    if (framee >= stop_frame) {
      lastframecanvas.copy(mightycanvas, 0, 0, Resx, Resy, 0, 0, Resx, Resy);
      // frameCount = 0;
      // framee = 0 ; 
      started_animation = false;
      // noLoop();
    }
    if(i_am_sure_i_concent_to_the_animation)saveCanvas(mightycanvas , animation_name + "_frame_" + nf(framee, 4) + ".png" ,"png") ; 
    framee++;
  }
}

let temp_sketch = function (p) {
  p.setup = function () {
    p.createCanvas(Resx, Resy);
    p.noLoop();
  };
};
function startAnimation() {
  started_animation = true;
}