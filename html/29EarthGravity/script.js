const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sun = {},earth = {},mars = {};
let distanceEarthMoon = 1;

function setup(){
  sun.pos = new Vector2d(canvas.width/2,canvas.height/2);
  sun.point = new Point(sun.pos.dx,sun.pos.dy,150,"yellow");

  earth.pos = new Vector2d(200,200);
  earth.vel = new Vector2d(2,-3);
  earth.acc = new Vector2d(0,0);
  earth.point = new Point(earth.pos.dx,earth.pos.dy,20,"blue");

  mars.pos = new Vector2d(200,200);
  mars.vel = new Vector2d(1,-3);
  mars.acc = new Vector2d(0,0);
  mars.point = new Point(mars.pos.dx,mars.pos.dy,20,"red");

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  distanceEarthMoon = sun.point.distanceToOtherPoint(earth.point);
  earth.acc.differenceVector(earth.pos,sun.pos);
  earth.acc.r = 10000/(distanceEarthMoon*distanceEarthMoon);

  distanceEarthMoon = sun.point.distanceToOtherPoint(mars.point);
  mars.acc.differenceVector(mars.pos,sun.pos);
  mars.acc.r = 10000/(distanceEarthMoon*distanceEarthMoon);


  context.fillStyle = "rgba(0,51,102,0)";
  context.fillRect(0,0,canvas.width,canvas.height);
  context.clearRect(0,0,canvas.width,canvas.height)
  sun.point.draw(context);

  earth.vel.add(earth.acc);
  earth.pos.add(earth.vel);
  earth.point.position(earth.pos);
  earth.point.draw(context);

  mars.vel.add(mars.acc);
  mars.pos.add(mars.vel);
  mars.point.position(mars.pos);
  mars.point.draw(context);

  earth.acc.draw(context,earth.pos.dx,earth.pos.dy,1,"blue");
  mars.acc.draw(context,mars.pos.dx,mars.pos.dy,1,"red");
}


setup()
