const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = [];
let numberOfPlayers = 5;
let A = {};
let B = {};
let C = {};
let D = {};
let goTo = [];


function setup(){
  for (var i = 0; i < numberOfPlayers; i++) {
    let object = {};
    object.pos = new Vector2d(Math.round(Math.random() * 1000),Math.round(Math.random() * 1000));
    object.point = new Point(object.pos.dx,object.pos.dy,20,"red");
    object.vel = new Vector2d(0,0)
    goTo.push("A");
    player.push(object);
  }

  A.pos = new Vector2d(Math.round(Math.random() * canvas.width),Math.round(Math.random() * canvas.height));
  A.point = new Point(A.pos.dx,A.pos.dy,20,"yellow");

  B.pos = new Vector2d(Math.round(Math.random() * canvas.width),Math.round(Math.random() * canvas.height));
  B.point = new Point(B.pos.dx,B.pos.dy,20,"yellow");

  C.pos = new Vector2d(Math.round(Math.random() * canvas.width),Math.round(Math.random() * canvas.height));
  C.point = new Point(C.pos.dx,C.pos.dy,20,"yellow");

  D.pos = new Vector2d(Math.round(Math.random() * canvas.width),Math.round(Math.random() * canvas.height));
  D.point = new Point(D.pos.dx,D.pos.dy,20,"yellow");


  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

for (var i = 0; i < numberOfPlayers; i++) {
  if(goTo[i] == "A"){
    player[i].vel.differenceVector(player[i].pos,A.pos);
    if(player[i].point.distanceToOtherPoint(A.point)<5){
      goTo[i] = "B";
    }
  }
  else if (goTo[i] == "B")
  {
    player[i].vel.differenceVector(player[i].pos,B.pos);
    if(player[i].point.distanceToOtherPoint(B.point)<5){
      goTo[i] = "C";
    }
  }
  else if (goTo[i] == "C")
  {
    player[i].vel.differenceVector(player[i].pos,C.pos);
    if(player[i].point.distanceToOtherPoint(C.point)<5){
      goTo[i] = "D";
    }
  }
  else if (goTo[i] == "D")
  {
    player[i].vel.differenceVector(player[i].pos,D.pos);
    if(player[i].point.distanceToOtherPoint(D.point)<5){
      goTo[i] = "A";
    }
  }
  player[i].point.draw(context);
  player[i].vel.magnitude = 5;
  player[i].pos.add(player[i].vel);
  player[i].point.position(player[i].pos)

    player[i].vel.draw(context,player[i].pos.dx,player[i].pos.dy,10);
}



  A.point.draw(context);
  B.point.draw(context);
  C.point.draw(context);
  D.point.draw(context);


}

setup();
