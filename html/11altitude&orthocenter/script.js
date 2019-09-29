const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(200,100,20,"blue");
let B = new Point(600,300,20,"red");
let C = new Point(100,500,20,"yellow");
let D = new Point(0,0,20,"white");
let E = new Point(0,0,20,"white");
let F = new Point(0,0,20,"white");
let G = new Point(0,0,20,"white");


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

  l.letTwoPointsDefineLine(A,B);
  l.draw(context);

  m.letTwoPointsDefineLine(A,C);
  m.draw(context);

  n.letTwoPointsDefineLine(C,B);
  n.draw(context);

  o.slope = -1/l.slope;
  o.intercept = C.y - o.slope*C.x;
  o.draw(context);

  p.slope = -1/m.slope;
  p.intercept = B.y - p.slope*B.x;
  p.draw(context);

  q.slope = -1/n.slope;
  q.intercept = A.y - q.slope*A.x;
  q.draw(context);

  D.x = l.intersection(o).x;
  D.y = l.intersection(o).y;

  E.x = m.intersection(p).x;
  E.y = m.intersection(p).y;

  F.x = n.intersection(q).x;
  F.y = n.intersection(q).y;

  G.x = o.intersection(q).x;
  G.y = o.intersection(q).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);

  D.draw(context);
  E.draw(context);
  F.draw(context);
  G.draw(context);

  A.printText("A");
  B.printText("B");
  C.printText("C");
}

animate();
