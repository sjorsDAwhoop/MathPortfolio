const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let numberofbounce = 200;
let bouncyObject = [];


  for(let i = 0; i < numberofbounce; i++){
  let object = {};
  object.point = new Point(300,300,10,"blue");
  object.pos = new Vector2d(Math.random()* window.innerHeight,Math.random()* window.innerWidth);
  object.vel = new Vector2d((Math.random()* 5),0);
  object.acc = new Vector2d(0,0.6);
  bouncyObject.push(object);
}



function animate(){

  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < bouncyObject.length; i++){
    bouncyObject[i].vel.add(bouncyObject[i].acc);
    bouncyObject[i].pos.add(bouncyObject[i].vel);
    bouncyObject[i].point.position(bouncyObject[i].pos);
    bouncyObject[i].point.draw(context);
    if(bouncyObject[i].pos.dx > canvas.width){
      bouncyObject[i].vel.dx = - bouncyObject[i].vel.dx;
      bouncyObject[i].pos.dx = canvas.width;
    }
    if(bouncyObject[i].pos.dx < 0){
      bouncyObject[i].vel.dx = - bouncyObject[i].vel.dx;
      bouncyObject[i].pos.dx = 0;
    }
    if(bouncyObject[i].pos.dy > canvas.height){
      bouncyObject[i].vel.dy = - bouncyObject[i].vel.dy;
      bouncyObject[i].pos.dy = canvas.height;
    }
    if (bouncyObject[i].pos.dy <0) {
      bouncyObject[i].vel.dy = - bouncyObject[i].vel.dy;
      bouncyObject[i].pos.dy = 0;
    }
  }
}


animate();
