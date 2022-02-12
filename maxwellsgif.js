let text_font;
function preload() {
    text_font = loadFont("rockfont.ttf");
}

function fsetup() {
    // createCanvas(400, 400, WEBGL);
    textFont(text_font);
    textSize(20);
}

function fdraw() {
    translate(-width / 2, -height / 2);
    background(20);
    stroke(255);

    let r = 100;
    let d = r / 5;
    let thetaZ = PI / 2;
    let thetaY = 0;
    let thetaX = frameCount / 70; //map( mouseX , 0 , width , PI/2 , PI+PI/2) ;
    let x = width / 2,
        y = height / 2,
        z = width / 2;
    // let dx = cos(theta)*r ;
    // let dy = sin(theta)*r ;
    translate(x, y);

    orbitControl();
    fill(200);
    text("I", 0, -r, 0);
    text("B", -r - 5, 0, 0);
    rotateZ(thetaZ);
    rotateY(thetaY);
    rotateX(thetaX);
    line(r, 0, 0, d - r, 0, 0);
    push();
    rotateZ(PI / 2);
    translate(0, ((frameCount / 2) % d) - r - d, 0);
    noStroke();
    // fill(137,207,240,200);
    fill(255, map((frameCount / 2) % d, 0, d, 0, 255));
    for (let i = 0; i < r * 2; i += d) {
        if (i == d) fill(255, 250);
        if (i == r * 2 - d) fill(255, map((frameCount / 2) % d, 0, d, 255, 0));
        translate(0, d, 0);
        cone(3, 10, 4, 3);
    }
    pop();
    noFill();
    // dx = sin(theta)*100 ;
    // dy = cos(theta)*100 ;
    rotateY(PI / 2);
    noStroke();
    for (let i = r; i < 2 * r; i += r / 5) {
        stroke(255 - map(i, r, 2 * r, 0, 255));
        arc(0, 0, i, i, frameCount / 70 + PI - i / 100, frameCount / 70 + TWO_PI - i / 100);
        for (let j = -0.2; j <= TWO_PI - 0.2; j += TWO_PI / 24) {
            push();

            translate(cos(j + i / 100) * i / 2, sin(j + i / 100) * i / 2, 0);
            // if(j >= TWO_PI - 0.2 ) {
            // rotateZ(j+PI/2) ; 
            // cone(3,10) ; 
            // }
            sphere(1, 5, 5);
            pop();
        }
    }
}
