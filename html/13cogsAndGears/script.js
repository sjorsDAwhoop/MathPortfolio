const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let gear = new Image();
gear.rot = 0;
gear.src = "Gear1.png";

let gear2 = new Image()
gear2.rot = 0.10;
gear2.src = "Gear1.png";

let gear3 = new Image()
gear3.rot = 0.10;
gear3.src = "Gear2.png";

gear.addEventListener('load',()=>{
  animate();
})

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  context.save();
  context.translate(250,250);
  context.rotate(gear.rot);
  context.drawImage(gear,-gear.width/2,-gear.height/2);
  context.restore();


  context.save();
  context.translate(410,250);
  context.rotate(gear2.rot);
  context.drawImage(gear2,-gear2.width/2,-gear2.height/2);
  context.restore();

  context.save();
  context.translate(410,250);
  context.rotate(gear3.rot);
  context.drawImage(gear3,-gear3.width/2,-gear3.height/2);
  context.restore();


  gear.rot += 0.01;
  gear2.rot -= 0.01;
  gear3.rot += 0.01;
}
