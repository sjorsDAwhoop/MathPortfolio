const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"red");
let B = new Point(600,300,20,"blue");
let C = new Point(100,500,20,"yellow");
let AB = new Point(200,200,20,"white");
let AC = new Point(600,300,20,"white");
let CB = new Point(200,500,20,"white");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let n = new LinearFunction(1,1);
let o = new LinearFunction(1,1);
let p = new LinearFunction(1,1);
let q = new LinearFunction(1,1);


A.drag(); B.drag();C.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  if(A.x > B.x) AB.x = B.x + ((A.x - B.x)/2);
  else AB.x = A.x + ((B.x - A.x)/2);
  if(A.y > B.y) AB.y = B.y + ((A.y - B.y)/2);
  else AB.y = A.y + ((B.y - A.y)/2);

  if(B.x > C.x) CB.x = C.x + ((B.x - C.x)/2);
  else CB.x = B.x + ((C.x - B.x)/2);
  if(B.y > C.y) CB.y = C.y + ((B.y - C.y)/2);
  else CB.y = B.y + ((C.y - B.y)/2);

  if(C.x > A.x) AC.x = A.x + ((C.x - A.x)/2);
  else AC.x = C.x + ((A.x - C.x)/2);
  if(C.y > A.y) AC.y = A.y + ((C.y - A.y)/2);
  else AC.y = C.y + ((A.y - C.y)/2);

  l.letTwoPointsDefineLine(A,B);
  l.draw(context);

  m.letTwoPointsDefineLine(A,C);
  m.draw(context);

  n.letTwoPointsDefineLine(C,B);
  n.draw(context);

  o.letTwoPointsDefineLine(A,CB);
  o.draw(context);

  p.letTwoPointsDefineLine(B,AC);
  p.draw(context);

  q.letTwoPointsDefineLine(C,AB);
  q.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);
  AB.draw(context);
  CB.draw(context);
  AC.draw(context);

  A.printText("A");
  B.printText("B");
  C.printText("C");
  AB.printText("AB");
  CB.printText("CB");
  AC.printText("AC");
}

animate();
