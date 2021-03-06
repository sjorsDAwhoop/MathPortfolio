class Vector2d {
  constructor(dx,dy) {
    this.dx = dx;
    this.dy = dy;
  }

  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }
  sub(vector){
    this.dx -= vector.dx;
    this.dy -= vector.dy;
  }

  get r(){
    return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
  }


   set r(mag){
    let tempangle = this.angle;
    this.dx = mag * Math.cos(tempangle);
    this.dy = mag * Math.sin(tempangle);
 }
  get angle(){
    return Math.atan2(this.dy,this.dx)
  }
  get magnitude(){
  return Math.sqrt(this.dx*this.dx+this.dy*this.dy);
}
  set angle(angle){
    let tempr = this.r;
    this.dx = tempr * Math.cos(angle);
    this.dy = tempr * Math.sin(angle);
  }


set magnitude(mag){
  let tempAngle = this.angle;
  this.dy = mag*Math.sin(tempAngle);
  this.dx = mag*Math.cos(tempAngle);
}

  differenceVector(a,b){
    this.dx = b.dx - a.dx;
    this.dy = b.dy - a.dy;
  }
  sumVector(a,b){
    this.dx = b.dx + a.dx;
    this.dy = b.dy + a.dy;
  }

  draw(context,x,y,scale){
    let sh = 5;
    let sw = this.r * scale;
    let aw = 20;
    let ah = 10;
    context.save();
    context.fillStyle = "red";
    context.translate(x,y);
    context.rotate(this.angle);
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,sh);
    context.lineTo(sw,sh);
    context.lineTo(sw,ah);
    context.lineTo(sw+ah,0);
    context.lineTo(sw,-ah);
    context.lineTo(sw,-sh);
    context.lineTo(0,-sh);
    context.closePath();
    context.stroke();
    context.fill();
    context.restore();
  }

  dot(vector){
    return (this.dx * vector.dx) + (this.dy * vector.dy);
  }
}
