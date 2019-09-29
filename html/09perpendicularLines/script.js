const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"red");
let B = new Point(600,200,15,"red");
let C = new Point(600,300,15,"yellow");

let f = new LinearFunction(10,100);
let m = new LinearFunction(1,1)

A.drag();
B.drag();
C.drag();

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  f.letTwoPointsDefineLine(A,B);
  f.draw(context);

  m.slope = -1/f.slope;
  m.intercept = C.y - m.slope*C.x;
  m.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);


}

animate();
