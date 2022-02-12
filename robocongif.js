function fff(){
    let f = frameCount / 100.0;
  
    let a = 4,
      aa = 2;
    t = -PI / 4;
    noFill();
    stroke(0, 255, 255);
    strokeWeight(2);
  
    translate(width / 2, height / 2);
    let b = 90;
  
    for (let theta = f; theta <= TWO_PI + f; theta += PI / 15.0) {
      push();
      translate(b * cos(theta), b * sin(theta));
      rotate(theta);
      line(0, 0, a * cos(t), a * sin(t));
      line(0, 0, a * cos(PI - t), a * sin(PI - t));
      point(0, -10);
      // line(20, 0 ,20 + a * sin(PI - t), a * cos(PI - t));
      pop();
    }
    strokeWeight(1);
    for (let theta = f; theta <= TWO_PI + f; theta += PI / 15.0) {
      push();
      translate(b * cos(theta), b * sin(theta));
      rotate(theta);
      line(20, 0, 20 + aa * cos(t), aa * sin(t));
      line(20, 0, 20 + aa * cos(PI - t), aa * sin(PI - t));
      line(20, 0, 20 + aa * sin(t), aa * cos(t));
      line(20, 0, 20 + aa * cos(t), aa * cos(t));
      // line(20, 0 ,20 + a * sin(PI - t), a * cos(PI - t));
      pop();
    }
    b = 100;
    strokeWeight(1);
    for (let theta = -f; theta <= TWO_PI + f; theta += PI / 15.0) {
      push();
      translate(b * cos(theta), b * sin(theta));
      circle(0, 0, 4);
      // circle(cos(theta)*40 , sin(theta)*40 , 4 ) ;
      pop();
    }
    b = 120;
    a = 10;
    t = -PI / 5;
    for (let theta = -f; theta <= TWO_PI + f; theta += TWO_PI / 3) {
      push();
      translate(b * cos(theta), b * sin(theta));
      rotate(theta);
      line(0, 0, a * cos(t), a * sin(t));
      line(0, 0, a * cos(TWO_PI - t), a * sin(TWO_PI - t));
  
      line(0, 20, a * cos(t), 20 + a * sin(t));
      line(0, 20, a * cos(TWO_PI - t), 20 + a * sin(TWO_PI - t));
  
      translate(
        (a * cos(t) + a * cos(TWO_PI - t)) / 2,
        (a * sin(t) + 20 + a * sin(TWO_PI - t)) / 2
      );
      line(0, 10, 0, -10);
      line(2, 5, 2, -5);
  
      // line(a * cos(t), a * sin(t)/4, a * cos(TWO_PI - t),20+ a * sin(TWO_PI - t)/4);
      // line(a * cos(t) - 3 , a * sin(t)/64, a * cos(TWO_PI - t)-3,20+ a * sin(TWO_PI - t)/64);
  
      pop();
    }
    b = cos(f) * 150;
    for (let theta = -f; theta <= TWO_PI + f; theta += TWO_PI / 3) {
      push();
      translate(b * cos(theta), b * sin(theta));
      rotate(theta + PI);
      line(0, -10, a * cos(t), a * sin(t) - 10);
      line(0, -10, a * cos(TWO_PI - t), a * sin(TWO_PI - t) - 10);
  
      line(10, -10, 10 + a * cos(t), a * sin(t) - 10);
      line(10, -10, 10 + a * cos(TWO_PI - t), a * sin(TWO_PI - t) - 10);
  
      line(5, -10, 5 + a * cos(t), a * sin(t) - 10);
      line(5, -10, 5 + a * cos(TWO_PI - t), a * sin(TWO_PI - t) - 10);
      // circle(cos(theta)*40 , sin(theta)*40 , 4 ) ;
      pop();
    }
    b = 180;
    for (let theta = -f; theta <= TWO_PI + f; theta += TWO_PI / 3) {
      push();
      // translate(b * cos(theta), b * sin(theta));
      rotate(theta + PI);
      arc(0, 0, b, b, theta, theta + PI / 4);
  
      pop();
    }
  
    //stroke(255, 0, 0) ;
    //strokeWeight(4) ;
    //point(0, 0) ;
    stroke(0, 255, 255, 50);
    strokeWeight(1);
    circle(0, 0, 165);
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(15);
    text("SRM TEAM", -20, -20);
    textSize(28);
    text("ROBOCON", 0, 0);
  }