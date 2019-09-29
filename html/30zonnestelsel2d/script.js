const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let planeten = [];
let ster = {};
let rotationRadiusA = 30;
let pivot = new Vector2d(canvas.width/2,canvas.height/2);
let maxRange = 450;

function setup(){
  ster.pos = new Vector2d(0,0);
  ster.relPos = new Vector2d(1,0);
  ster.point = new Point(100,100,20,"white");
  ster.relPos.angle = Math.random() * 6 - 3;
  ster.RotationSpeed = Math.random() * 0.007 + 0.002;
  for(let i = 60; i< maxRange; i+=Math.random()*20 + 40)
  {
    let planeet = {};
    planeet.pos = new Vector2d(0,0);
    planeet.relPos = new Vector2d(1,0);
    planeet.relPos.r = i;
    planeet.point = new Point(100,100,Math.random() * 5 + 1,"white");
    planeet.relPos.angle = Math.random() * 6 - 3;
    planeet.RotationSpeed = Math.random() * 0.007 + 0.002;
    planeten.push(planeet);
  }
  animate();
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  ster.pos.sumVector(ster.relPos,pivot);
  ster.point.x = ster.pos.dx;
  ster.point.y = ster.pos.dy;
  ster.point.draw(context);
  for (var i = 0; i < planeten.length; i++) {
    planeten[i].relPos.angle += planeten[i].RotationSpeed;
    planeten[i].pos.sumVector(planeten[i].relPos,pivot);
    planeten[i].point.x = planeten[i].pos.dx;
    planeten[i].point.y = planeten[i].pos.dy;
    planeten[i].point.draw(context);
  }
}


setup()
