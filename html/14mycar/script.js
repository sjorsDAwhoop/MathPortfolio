const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let car = new Image();
let carPosition = new Vector2d(0,600);
let carVelocity = new Vector2d(5,0);
var frontWheelVector = new Vector2d(672,119);

let street = new Image();
street.src = "street.png";

let frontWheel = new Image();
let rearWheel = new Image();
car.src = "car.png";
frontWheel.src = "wheel.png";
rearWheel.src = "wheel.png";
let rotation = 0;

car.addEventListener('load',()=>{
  carPosition.dy = canvas.height - 350;
  carPosition.dx = 100;
  console.log(car);
  animate();
})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  context.drawImage(street,0,canvas.height-street.height);
  rotation += carVelocity.dx /150;
  carPosition.add(carVelocity);
  context.drawImage(car,carPosition.dx,carPosition.dy);

  context.save();
  context.translate(carPosition.dx+752,carPosition.dy+200);
  context.rotate(rotation);
  context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();

  context.save();
  context.translate(carPosition.dx+215,carPosition.dy+200);
  context.rotate(rotation);
  context.drawImage(rearWheel,-rearWheel.width/2,-rearWheel.height/2)
  context.restore();

  if(carPosition.dx > canvas.width){
    carPosition.dx = -car.width;
  }
  if(carPosition.dx<-car.width){
    carPosition.dx = canvas.width;
  }
}

document.addEventListener('keydown',(evt)=>{
  if(evt.key == "ArrowRight"){
    carVelocity.dx += 2;
  }
  if(evt.key == "ArrowLeft"){
    carVelocity.dx -= 2;
  }
})
