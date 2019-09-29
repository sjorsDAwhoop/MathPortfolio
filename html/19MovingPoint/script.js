const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = {};
let A = {};
let B = {};
let C = {};
let D = {};
let E = {};
let goTo = "A";


function setup(){
  player.pos = new Vector2d(200,200);
  player.point = new Point(player.pos.dx,player.pos.dy,20,"yellow");
  player.vel = new Vector2d(0,0)

  A.pos = new Vector2d(Math.round(Math.random() * canvas.width),Math.round(Math.random() * canvas.height));
  A.point = new Point(A.pos.dx,A.pos.dy,20,"red");

  B.pos = new Vector2d(Math.round(Math.random() * canvas.width),Math.round(Math.random() * canvas.height));
  B.point = new Point(B.pos.dx,B.pos.dy,20,"red");

  C.pos = new Vector2d(Math.round(Math.random() * canvas.width),Math.round(Math.random() * canvas.height));
  C.point = new Point(C.pos.dx,C.pos.dy,20,"red");

  D.pos = new Vector2d(Math.round(Math.random() * canvas.width),Math.round(Math.random() * canvas.height));
  D.point = new Point(D.pos.dx,D.pos.dy,20,"red");

  E.pos = new Vector2d(Math.round(Math.random() * canvas.width),Math.round(Math.random() * canvas.height));
  E.point = new Point(E.pos.dx,E.pos.dy,20,"red");


  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  if(goTo == "A"){
    player.vel.differenceVector(player.pos,A.pos);
    if(player.point.distanceToOtherPoint(A.point)<5){
      goTo = "B";
    }
  }
  else if (goTo == "B")
  {
    player.vel.differenceVector(player.pos,B.pos);
    if(player.point.distanceToOtherPoint(B.point)<5){
      goTo = "C";
    }
  }
  else if (goTo == "C")
  {
    player.vel.differenceVector(player.pos,C.pos);
    if(player.point.distanceToOtherPoint(C.point)<5){
      goTo = "D";
    }
  }else if (goTo == "D")
  {
    player.vel.differenceVector(player.pos,D.pos);
    if(player.point.distanceToOtherPoint(D.point)<5){
      goTo = "E";
    }
  }else if (goTo == "E")
  {
    player.vel.differenceVector(player.pos,E.pos);
    if(player.point.distanceToOtherPoint(E.point)<5){
      goTo = "A";
    }
  }







  A.point.draw(context);
  B.point.draw(context);
  C.point.draw(context);
  D.point.draw(context);
  E.point.draw(context);
  player.point.draw(context);
  player.vel.magnitude = 5;
  player.pos.add(player.vel);
  player.point.position(player.pos);


  player.vel.draw(context,player.pos.dx,player.pos.dy,50);
}

setup();
