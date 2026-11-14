  function setup() {
     createCanvas (710, 410, WEBGL);
     angleMode(DEGREES);
     normalMaterial();
  }
   function draw() {
  background(250);
  
  //plano
  push();
  translate(-250, -100, 0);
  rotateWithFrameCount();
  plane(70);
  pop();

  //cubo
     push();
  translate(-5,-100,0);
  rotateWithFrameCount();
  box(70, 150, 70);
  pop();

  //torus
  push();
  translate(-175, 100, 100);
  rotateWithFrameCount();
  torus(50, 20);
  pop();

  //cono
  push();
  translate(25, 100, -100);
  rotateWithFrameCount();
  cone(50, 70);
  pop();
}

  function rotateWithFrameCount () {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);

 }
